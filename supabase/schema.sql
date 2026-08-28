-- ==========================================
-- STAGE 7: SUPABASE POSTGRESQL SCHEMA
-- ==========================================

-- 1. Create Tables
CREATE TABLE public.profiles (
  id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name text,
  avatar_url text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE public.exploration_events (
  id uuid DEFAULT gen_random_uuid() NOT NULL,
  user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  record_id text NOT NULL,
  record_type text NOT NULL CHECK (record_type IN ('heritage', 'culture', 'trail')),
  explored_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT exploration_events_user_record_unique UNIQUE (user_id, record_type, record_id)
);

CREATE TABLE public.saved_items (
  id uuid DEFAULT gen_random_uuid() NOT NULL,
  user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  record_id text NOT NULL,
  record_type text NOT NULL CHECK (record_type IN ('heritage', 'culture', 'trail')),
  saved_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT saved_items_user_record_unique UNIQUE (user_id, record_type, record_id)
);

-- 2. Create Indexes for performance
CREATE INDEX idx_exploration_events_user_id ON public.exploration_events(user_id);
CREATE INDEX idx_saved_items_user_id ON public.saved_items(user_id);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exploration_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_items ENABLE ROW LEVEL SECURITY;

-- 4. Create RLS Policies

-- Profiles Policies
CREATE POLICY "Users can view own profile" 
ON public.profiles FOR SELECT 
USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" 
ON public.profiles FOR INSERT 
WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = id) 
WITH CHECK (auth.uid() = id);

-- Exploration Events Policies
CREATE POLICY "Users can view own exploration events" 
ON public.exploration_events FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own exploration events" 
ON public.exploration_events FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own exploration events" 
ON public.exploration_events FOR UPDATE 
USING (auth.uid() = user_id) 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own exploration events" 
ON public.exploration_events FOR DELETE 
USING (auth.uid() = user_id);

-- Saved Items Policies
CREATE POLICY "Users can view own saved items" 
ON public.saved_items FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own saved items" 
ON public.saved_items FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own saved items" 
ON public.saved_items FOR DELETE 
USING (auth.uid() = user_id);

-- 5. Automate Profile Creation via Trigger
-- This ensures a profile row exists immediately when a user signs up.
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, avatar_url)
  VALUES (
    new.id, 
    new.raw_user_meta_data->>'display_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger the function every time a user is created
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
