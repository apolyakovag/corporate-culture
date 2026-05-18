# Create repo and deploy to GitHub Pages (requires: gh auth login)

$ErrorActionPreference = "Stop"
$RepoName = "corporate-culture"
$ProjectRoot = Split-Path -Parent $PSScriptRoot

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Error "Install GitHub CLI: winget install GitHub.cli"
}

Set-Location $ProjectRoot

gh auth status | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Run: gh auth login -h github.com -p https -w -c"
    exit 1
}

$user = gh api user -q .login
Write-Host "GitHub user: $user"

$null = gh repo view "$user/$RepoName" 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Creating repo $user/$RepoName ..."
    gh repo create $RepoName --public --source=. --remote=origin --description "Corporate culture web app"
} else {
    Write-Host "Repo exists: $user/$RepoName"
    $remote = git remote get-url origin 2>$null
    if (-not $remote) {
        git remote add origin "https://github.com/$user/$RepoName.git"
    }
}

git branch -M main 2>$null
Write-Host "Pushing to GitHub..."
git push -u origin main

Write-Host "Enabling GitHub Pages (workflow)..."
gh api "repos/$user/$RepoName/pages" -X POST -f build_type=workflow 2>$null

$site = "https://$user.github.io/$RepoName/"
Write-Host ""
Write-Host "Done."
Write-Host "Site (after Actions, 1-3 min): $site"
Write-Host "Theory page: ${site}#/osnovnye-ponyatiya"
Write-Host "Actions: https://github.com/$user/$RepoName/actions"
