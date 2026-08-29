@echo off
REM start.bat — checks Node, sets env, installs deps, and runs Quasar dev

REM Check for node
for /f "tokens=1 delims=" %%v in ('node -v 2^>nul') do set NODE_VER=%%v
if "%NODE_VER%"=="" (
  echo Node.js not found. Please install Node >= 22.22.0 from https://nodejs.org
  pause
  exit /b 1
)

REM strip leading 'v'
set NODE_VER=%NODE_VER:~1%

for /f "tokens=1,2,3 delims=." %%a in ("%NODE_VER%") do (
  set NODE_MAJOR=%%a
  set NODE_MINOR=%%b
  set NODE_PATCH=%%c
)

REM numeric compare: require major>22 OR major==22 and minor>=22 OR major>22
if %NODE_MAJOR% GTR 22 goto node_ok
if %NODE_MAJOR% LSS 22 goto node_bad
if %NODE_MINOR% GEQ 22 goto node_ok

:node_bad
echo Node version %NODE_VER% is too old. Please upgrade to Node >= 22.22.0
pause
exit /b 1

:node_ok
echo Detected Node %NODE_VER% — OK.

REM Set Supabase env vars for Vite
set VITE_SUPABASE_URL=https://lyurxavkcffzqslzljxe.supabase.co
set VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_O1p27jKfcLzd9Xm6yeYJGQ_z7rD_e1C

REM Change to project dir (assumes this .bat lives in the project root)
cd /d "%~dp0"

echo Installing / updating dependencies...
call npm install
if errorlevel 1 (
  echo npm install failed. Resolve errors and try again.
  pause
  exit /b 1
)

echo Starting Quasar dev server...
echo.
echo  App will be available at http://localhost:9000/
echo.

REM Open browser after a short delay (3 seconds)
start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:9000/"

REM Run the dev server in this window
call npm run dev
