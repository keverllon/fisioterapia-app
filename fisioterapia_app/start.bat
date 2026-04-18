@echo off
cd /d "%~dp0"
npx http-server -p 8080 -c-1
pause