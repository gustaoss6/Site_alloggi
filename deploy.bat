@echo off
chcp 65001 > nul
echo ==========================================================
echo 🌿 ALLOGGI | Deploy e Publicacao no GitHub
echo ==========================================================

REM Inicializar git
if not exist .git (
    echo [1/4] Inicializando Git...
    git init -b main
) else (
    echo [1/4] Git ja inicializado.
    git branch -M main
)

REM Adicionar e comitar
echo [2/4] Adicionando arquivos...
git add .
git commit -m "feat: initial commit - Alloggi real estate luxury web platform"

REM Configurar remote
echo [3/4] Configurando remote origin...
git remote remove origin 2>nul
git remote add origin https://github.com/gustaoss6/Allggi.git

REM Push
echo [4/4] Enviando para o GitHub...
git push -u origin main

echo.
echo Processo concluido!
pause
