# Script de Conexão e Publicação no GitHub - Alloggi
# Autor: Gustavo (@gustaoss6)

Write-Host "==========================================================" -ForegroundColor Green
Write-Host "🌿 ALLOGGI | Deploy & GitHub Push Automation" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Green

# 1. Verificar Git
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Git não está instalado ou não está no PATH do sistema." -ForegroundColor Red
    exit 1
}

# 2. Inicializar repositório se necessário
if (-not (Test-Path .git)) {
    Write-Host "📦 Inicializando repositório Git local..." -ForegroundColor Cyan
    git init -b main
} else {
    Write-Host "ℹ️ Repositório Git já inicializado." -ForegroundColor Cyan
    git branch -M main
}

# 3. Adicionar arquivos e fazer commit
Write-Host "📝 Adicionando arquivos..." -ForegroundColor Cyan
git add .
$status = git status --porcelain
if ($status) {
    Write-Host "💾 Criando commit..." -ForegroundColor Cyan
    git commit -m "feat: initial commit - Alloggi real estate luxury web platform"
} else {
    Write-Host "ℹ️ Nada novo para comitar." -ForegroundColor Yellow
}

# 4. Definir e conectar ao repositório remoto
$repoName = "Site_alloggi"
$githubUser = "gustaoss6"
$remoteUrl = "https://github.com/$githubUser/$repoName.git"

Write-Host "🔗 Conectando ao repositório remoto: $remoteUrl" -ForegroundColor Cyan
git remote remove origin 2>$null
git remote add origin $remoteUrl

# 5. Push para o GitHub
Write-Host "🚀 Enviando código para o branch main no GitHub..." -ForegroundColor Green
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "🎉 Push realizado com sucesso no repositório: $remoteUrl" -ForegroundColor Green
    Write-Host "==========================================================" -ForegroundColor Green
} else {
    Write-Host "⚠️ Atenção: Se o push falhar por autenticação ou se o repositório ainda não tiver sido criado no GitHub, acesse https://github.com/new e crie o repositório '$repoName' (ou confirme seu login)." -ForegroundColor Yellow
}
