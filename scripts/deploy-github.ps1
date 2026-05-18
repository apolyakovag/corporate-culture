# Создание репозитория и публикация на GitHub Pages
# Требуется: gh auth login (один раз)

$ErrorActionPreference = "Stop"
$RepoName = "corporate-culture"
$ProjectRoot = Split-Path -Parent $PSScriptRoot

$gh = Get-Command gh -ErrorAction SilentlyContinue
if (-not $gh) {
    Write-Error "Установите GitHub CLI: winget install GitHub.cli"
}

Push-Location $ProjectRoot

$auth = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Войдите в GitHub (откроется браузер)..." -ForegroundColor Yellow
    gh auth login -h github.com -p https -w
}

$user = gh api user -q .login
Write-Host "GitHub: $user" -ForegroundColor Green

$exists = gh repo view "$user/$RepoName" 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Создаю репозиторий $user/$RepoName ..."
    gh repo create $RepoName --public --source=. --remote=origin --description "Корпоративная культура — веб-приложение"
} else {
    Write-Host "Репозиторий уже существует: $user/$RepoName"
    $remote = git remote get-url origin 2>$null
    if (-not $remote) {
        git remote add origin "https://github.com/$user/$RepoName.git"
    }
}

git branch -M main 2>$null
Write-Host "Отправка кода на GitHub..."
git push -u origin main

Write-Host "Включаю GitHub Pages (Actions)..."
gh api "repos/$user/$RepoName/pages" -X POST -f build_type=workflow 2>$null

$site = "https://$user.github.io/$RepoName/"
Write-Host ""
Write-Host "Готово!" -ForegroundColor Green
Write-Host "Сайт (через 1-3 мин после Actions): $site"
Write-Host "Теория: ${site}#/osnovnye-ponyatiya"
Write-Host "Actions: https://github.com/$user/$RepoName/actions"

Pop-Location
