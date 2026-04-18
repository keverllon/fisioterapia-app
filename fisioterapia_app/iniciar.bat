@echo off
echo ========================================
echo    DR Roberta - Fisioterapia
echo ========================================
echo.
echo Iniciando servidor...
echo.
echo Abra no navegador: http://localhost:8080
echo.
echo Para parar: CTRL+C
echo ========================================
cd /d "%~dp0"
npx http-server -p 8080 -c-1 --cors
pause