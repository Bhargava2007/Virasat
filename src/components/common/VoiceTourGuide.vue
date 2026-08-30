<template>
  <transition name="slide-up">
    <q-card v-if="isOpen" class="voice-widget-card column">
      <q-card-section class="row items-center justify-between header-section q-pa-sm">
        <div class="row items-center gap-2 q-px-sm">
          <q-icon name="face" size="24px" class="text-white q-mr-sm" />
          <div class="text-subtitle1 text-weight-bold text-white">Your Tour Guide</div>
        </div>
        <q-btn icon="close" flat round dense @click="closeWidget" class="text-white" size="sm" />
      </q-card-section>

      <q-card-section class="col column content-section q-pa-md">
        <div class="q-mb-md row justify-center">
          <q-btn-toggle
            v-model="selectedLang"
            no-caps
            rounded
            unelevated
            toggle-color="brown-8"
            toggle-text-color="white"
            color="white"
            text-color="grey-9"
            size="sm"
            class="lang-toggle shadow-3"
            :options="[
              {label: 'EN', value: 'en-IN'},
              {label: 'HI', value: 'hi-IN'},
              {label: 'OD', value: 'or-IN'}
            ]"
          />
        </div>

        <div class="mic-container q-mb-md" :class="{ 'is-listening': isListening, 'is-speaking': isSpeaking }">
          <q-btn 
            v-if="isSpeaking"
            round 
            color="negative"
            icon="stop"
            size="28px"
            @click="interruptAI"
            class="mic-btn"
          >
            <q-tooltip>Interrupt AI</q-tooltip>
          </q-btn>
          <q-btn 
            v-else
            round 
            :color="isListening ? 'negative' : 'brown-8'"
            :icon="isListening ? 'mic' : 'mic_none'"
            size="28px"
            @click="toggleListening"
            :loading="isLoading"
            class="mic-btn"
          >
            <template v-slot:loading>
              <q-spinner-dots size="1.5em" />
            </template>
          </q-btn>
          <div v-if="isListening" class="pulse-ring"></div>
          <div v-if="isSpeaking" class="pulse-ring speaking-pulse"></div>
        </div>

        <div class="transcript-area col">
          <transition name="fade" mode="out-in">
            <div v-if="error" class="text-negative text-caption text-center q-mx-auto">
              {{ error }}
            </div>
            <div v-else-if="aiResponse" class="ai-response-text text-body1 text-weight-medium">
              {{ aiResponse }}
            </div>
            <div v-else-if="transcript" class="user-transcript-text text-body1">
              "{{ transcript }}"
            </div>
            <div v-else class="hint-text text-caption text-center q-mx-auto">
              Tap the microphone or type to chat
            </div>
          </transition>
        </div>

        <!-- Text Input Area -->
        <div class="row full-width q-mt-md items-center input-wrapper">
          <q-input 
            v-model="textQuery" 
            outlined 
            dense 
            rounded 
            bg-color="white"
            class="col"
            placeholder="Write a reply..."
            @keyup.enter="sendTextQuery"
            :disable="isLoading"
          >
            <template v-slot:append>
              <q-btn round dense flat icon="send" color="brown-8" @click="sendTextQuery" :disable="!textQuery.trim() || isLoading" />
            </template>
          </q-input>
        </div>
      </q-card-section>
    </q-card>
  </transition>
</template>

<script setup>
import { ref, watch, onBeforeUnmount, nextTick, computed } from 'vue'
import { useRoute } from 'vue-router'
import { allHeritage } from '@/data/heritage.js'
import { allCulture } from '@/data/culture.js'

const props = defineProps({
  modelValue: { type: Boolean, default: false }
})

const route = useRoute()

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(props.modelValue)

watch(() => props.modelValue, (val) => {
  isOpen.value = val
  if (val) {
    // Reset conversation history on open
    conversationHistory.value = []
    // Auto start listening when opened
    nextTick(() => {
      initSpeech()
      toggleListening()
    })
  } else {
    stopAll()
  }
})

watch(isOpen, (val) => {
  emit('update:modelValue', val)
})

const isListening = ref(false)
const isSpeaking = ref(false)
const isLoading = ref(false)
const transcript = ref('')
const aiResponse = ref('')
const error = ref('')
const selectedLang = ref('en-IN')
const textQuery = ref('')

const conversationHistory = ref([])

let recognition = null
let synthesis = null

const initSpeech = () => {
  error.value = ''
  
  if (!synthesis) synthesis = window.speechSynthesis
  
  if (!recognition) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      error.value = "Your browser does not support voice recognition."
      return
    }
    recognition = new SpeechRecognition()
  }

  recognition.continuous = false
  recognition.interimResults = true
  recognition.lang = selectedLang.value 
  
  recognition.onstart = () => {
    isListening.value = true
    isSpeaking.value = false
    transcript.value = ''
    aiResponse.value = ''
    error.value = ''
    if (synthesis && synthesis.speaking) synthesis.cancel()
  }

  recognition.onresult = (event) => {
    let interimTranscript = ''
    let finalTranscript = ''

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalTranscript += event.results[i][0].transcript
      } else {
        interimTranscript += event.results[i][0].transcript
      }
    }
    
    transcript.value = finalTranscript || interimTranscript
  }

  recognition.onerror = (event) => {
    console.error("Speech recognition error", event.error)
    isListening.value = false
    if (event.error !== 'no-speech') {
      error.value = "Microphone error: " + event.error
    }
  }

  recognition.onend = () => {
    isListening.value = false
    if (transcript.value.trim().length > 0 && !error.value) {
      handleQueryAI(transcript.value)
    }
  }
}

const toggleListening = () => {
  if (isSpeaking.value) {
    stopAll()
    return
  }
  
  if (isListening.value) {
    recognition?.stop()
  } else {
    try {
      // Refresh language before starting
      if (recognition) recognition.lang = selectedLang.value
      recognition?.start()
    } catch (e) {
      console.error(e)
    }
  }
}

const sendTextQuery = () => {
  if (!textQuery.value.trim() || isLoading.value) return
  
  if (isListening.value) {
    try { recognition?.stop() } catch (e) {}
  }
  if (isSpeaking.value) {
    interruptAI()
  }
  
  const query = textQuery.value.trim()
  textQuery.value = ''
  transcript.value = query
  aiResponse.value = ''
  error.value = ''
  
  handleQueryAI(query)
}

const handleQueryAI = async (userText) => {
  isLoading.value = true
  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY
  if (!apiKey) {
    error.value = "API Key missing! Please set VITE_GEMINI_API_KEY in your .env file."
    isLoading.value = false
    return
  }

  const systemPrompt = computed(() => {
    let contextStr = "The user is exploring the Virasat website, a platform for Indian cultural heritage. You are a helpful guide. Assist them with navigation or general cultural information."
    
    if (route.name === 'heritage-detail' || route.name === 'culture-detail') {
      const slug = route.params.slug
      const list = route.name === 'heritage-detail' ? allHeritage : allCulture
      const item = list.find(i => i.slug === slug)
      if (item) {
        contextStr = `The user is looking at: ${item.name}. Context: ${item.history || item.shortDescription || item.description}. Focus on giving fascinating facts about this specific item.`
      }
    } else if (route.name === 'explore' || route.name === 'explore-map') {
      contextStr = "The user is exploring the interactive map of Indian heritage sites."
    } else if (route.name === 'complaints') {
      contextStr = "The user is on the Complaints & Reports page, looking to report damage or rectify information about a heritage site."
    }
    
    return `You are a friendly, passionate human tour guide for the Virasat platform. 
Context: ${contextStr}

CRITICAL RULES:
1. ACT HUMAN: Do not sound like an AI. Speak casually and warmly. Use conversational filler words (like "Ah", "Well").
2. CONVERSATIONAL LENGTH: Adapt your length to the question. For simple queries, be brief. If the user asks for history or a description, provide a fascinating summary of about 4 to 5 sentences. Do not write massive essays or long lists.
3. NO FORMATTING: Do not use bullet points or markdown.
4. LANGUAGE: Respond in the exact language the user speaks to you.`
  })

  // Append user message to history in Gemini format
  conversationHistory.value.push({ role: 'user', parts: [{ text: userText }] })

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt.value }] },
        contents: conversationHistory.value,
        generationConfig: { temperature: 0.7 }
      })
    })

    if (!res.ok) {
      const errText = await res.text()
      throw new Error(`API Error ${res.status}: ${errText}`)
    }
    
    const data = await res.json()
    console.log('Gemini API Response:', data)
    
    if (data.error) {
      throw new Error(`API Error: ${data.error.message || JSON.stringify(data.error)}`)
    }
    
    let textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text
    
    if (textResponse) {
      // Remove deep-thinking blocks before speaking
      textResponse = textResponse.replace(/<think>[\s\S]*?<\/think>/g, '').trim()
    }
    
    if (!textResponse) {
      console.warn('No text in response. Candidate:', data.candidates?.[0])
      textResponse = "I'm sorry, I couldn't process that."
    }
    if (!isOpen.value) {
      console.log("Widget closed before response arrived. Aborting speech.")
      return
    }

    // Append model response to history in Gemini format
    conversationHistory.value.push({ role: 'model', parts: [{ text: textResponse }] })
    
    aiResponse.value = textResponse
    speakResponse(textResponse)
  } catch (err) {
    console.error(err)
    error.value = err.message || "Failed to connect to Gemini API."
    // Remove the user text from history so it doesn't corrupt future requests
    conversationHistory.value.pop()
  } finally {
    isLoading.value = false
  }
}

const speakResponse = (text) => {
  if (!synthesis) return
  
  // CRITICAL FIX: Clear any stuck background speech in the browser queue
  synthesis.cancel()
  
  const cleanText = text.replace(/\*/g, '').replace(/#/g, '')
  const utterance = new SpeechSynthesisUtterance(cleanText)
  
  const targetLang = selectedLang.value
  const voices = synthesis.getVoices()
  
  let voice = null
  const isTargetLang = (vLang) => vLang.replace('_', '-').toLowerCase() === targetLang.toLowerCase()
  
  // 1. Exact language match (e.g. en-IN, hi-IN) prioritizing high-quality voices
  const exactVoices = voices.filter(v => isTargetLang(v.lang))
  if (exactVoices.length > 0) {
    voice = exactVoices.find(v => v.name.toLowerCase().includes('natural') || v.name.toLowerCase().includes('online'))
         || exactVoices.find(v => v.name.toLowerCase().includes('google'))
         || exactVoices[0]
  }
  
  // 2. Fallback to ANY Indian voice if exact language is missing
  if (!voice) {
    const indianVoices = voices.filter(v => 
      v.lang.toLowerCase().includes('-in') || 
      v.lang.toLowerCase().includes('_in') || 
      v.name.toLowerCase().includes('india') ||
      v.name.toLowerCase().includes('hindi') ||
      v.lang.toLowerCase().startsWith('hi')
    )
    if (indianVoices.length > 0) {
      voice = indianVoices.find(v => v.name.toLowerCase().includes('natural'))
           || indianVoices.find(v => v.name.toLowerCase().includes('google'))
           || indianVoices.find(v => ['heera', 'ravi', 'neerja', 'aarohi', 'prabhat', 'kalpana', 'swara'].some(n => v.name.toLowerCase().includes(n)))
           || indianVoices[0]
    }
  }
  
  // 3. Absolute fallback
  if (!voice && voices.length > 0) {
    voice = voices.find(v => v.name.toLowerCase().includes('heera')) ||
            voices.find(v => v.name.toLowerCase().includes('neerja')) ||
            voices.find(v => v.name.toLowerCase().includes('ravi')) ||
            voices.find(v => v.lang.toLowerCase().startsWith(targetLang.split('-')[0].toLowerCase())) || 
            voices[0]
  }

  if (voice) {
    console.log("Selected TTS Voice:", voice.name, "Lang:", voice.lang)
    utterance.voice = voice
  }
  
  utterance.onstart = () => {
    isSpeaking.value = true
  }
  
  utterance.onend = () => {
    isSpeaking.value = false
    // If the mic died, turn it back on.
    if (isOpen.value && !isListening.value) {
      try { recognition?.start() } catch(e) {}
    }
  }
  
  utterance.onerror = (e) => {
    console.error('Speech synthesis error', e)
    isSpeaking.value = false
  }
  
  synthesis.speak(utterance)
}

const interruptAI = () => {
  if (synthesis) {
    synthesis.cancel()
  }
  isSpeaking.value = false
  
  // Automatically turn mic on so user can speak immediately after interrupting
  setTimeout(() => {
    if (isOpen.value && !isListening.value) {
      try {
        if (recognition) recognition.lang = selectedLang.value
        recognition?.start()
      } catch (e) {
        console.error("Could not restart mic after interrupt:", e)
      }
    }
  }, 150)
}

const stopAll = () => {
  if (recognition) {
    try { recognition.stop() } catch (e) {}
  }
  if (synthesis) {
    try { synthesis.cancel() } catch(e) {}
  }
  isListening.value = false
  isSpeaking.value = false
  isLoading.value = false
}

const closeWidget = () => {
  stopAll()
  isOpen.value = false
}

onBeforeUnmount(() => {
  stopAll()
})
</script>

<style scoped lang="scss">
.voice-widget-card {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 400px;
  height: 600px;
  max-height: 85vh;
  z-index: 5000;
  border-radius: 24px;
  background: #ffffff url('/voice_bg_lineart.jpg') center/cover repeat;
  backdrop-filter: blur(12px);
  box-shadow: 0 16px 48px rgba(74, 44, 30, 0.2);
  border: 1px solid rgba(184, 75, 42, 0.15);
  
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  /* Reduced overlay opacity so line art is clearly visible */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(255, 255, 255, 0.45);
    z-index: 0;
  }
  
  > * {
    z-index: 1;
  }
  
  @media (max-width: 600px) {
    width: calc(100vw - 24px);
    bottom: 12px;
    right: 12px;
    height: 85vh;
  }
}

.header-section {
  background: #3d2b22; /* Darker brown/terracotta like the inspiration */
  border-bottom: 2px solid #b84b2a;
}

.lang-toggle {
  border: 1px solid rgba(184, 75, 42, 0.2);
}

.text-terracotta {
  color: #b84b2a !important;
}

.bg-terracotta {
  background: #b84b2a !important;
}

.mic-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

.mic-btn {
  z-index: 2;
  box-shadow: 0 8px 24px rgba(184, 75, 42, 0.3);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
}

.pulse-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(184, 75, 42, 0.25);
  z-index: 1;
  animation: pulse 1.5s infinite ease-out;
}

.speaking-pulse {
  background: rgba(46, 125, 50, 0.25); /* Greenish pulse for speaking */
  animation: speakPulse 1.2s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    width: 50px;
    height: 50px;
    opacity: 1;
  }
  100% {
    width: 140px;
    height: 140px;
    opacity: 0;
  }
}

@keyframes speakPulse {
  0%, 100% {
    width: 70px;
    height: 70px;
    opacity: 0.8;
  }
  50% {
    width: 130px;
    height: 130px;
    opacity: 0.3;
  }
}

.transcript-area {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Crucial for scrolling to work properly */
  flex-direction: column;
  overflow-y: auto;
  padding: 12px;
  word-break: break-word;
}

.input-wrapper {
  background: rgba(255, 255, 255, 0.85);
  border-radius: 30px;
  padding: 4px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border: 1px solid rgba(184, 75, 42, 0.1);
}

/* Custom scrollbar for transcript area */
.transcript-area::-webkit-scrollbar {
  width: 6px;
}
.transcript-area::-webkit-scrollbar-thumb {
  background-color: rgba(184, 75, 42, 0.3);
  border-radius: 10px;
}

.ai-response-text {
  color: #3d2b22;
  line-height: 1.6;
  font-family: var(--font-body);
  background: rgba(255, 255, 255, 0.85);
  padding: 16px;
  border-radius: 16px;
  border-top-left-radius: 4px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border: 1px solid rgba(184, 75, 42, 0.15);
  text-align: left;
  margin-right: auto;
  max-width: 90%;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.user-transcript-text {
  color: #5c4538;
  font-family: var(--font-body);
  background: rgba(184, 75, 42, 0.1);
  padding: 12px 16px;
  border-radius: 16px;
  border-top-right-radius: 4px;
  border: 1px solid rgba(184, 75, 42, 0.2);
  text-align: right;
  margin-left: auto;
  max-width: 90%;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.hint-text {
  color: #7a685d;
  font-family: var(--font-body);
  background: rgba(255, 255, 255, 0.7);
  padding: 6px 12px;
  border-radius: 20px;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
