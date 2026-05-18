# Корпоративная культура

Веб-приложение (React + Vite) по макету Figma.

## Локальный запуск

```bash
cd web
npm install
npm run dev
```

Откройте адрес из терминала (обычно http://localhost:5173/).

## Публикация на GitHub Pages (одна команда)

1. Установите [GitHub CLI](https://cli.github.com/) (если ещё нет): `winget install GitHub.cli`
2. В PowerShell из папки проекта:

```powershell
cd "d:\cursor\курсор1"
powershell -ExecutionPolicy Bypass -File .\scripts\deploy-github.ps1
```

При первом запуске откроется браузер — войдите в GitHub и подтвердите доступ. Скрипт создаст репозиторий `corporate-culture`, загрузит код и включит Pages.

После зелёного workflow в **Actions** сайт будет здесь:

`https://ВАШ_ЛОГИН.github.io/corporate-culture/`

---

## Публикация вручную

Сообщение **«There isn't a GitHub Pages site here»** значит, что сайт ещё не задеплоен. Нужны **код в репозитории** и **успешный workflow**.

### Шаг 1. Репозиторий на GitHub

1. Откройте https://github.com/new  
2. Имя репозитория, например: `corporate-culture` (латиница, без пробелов)  
3. **Public** (для бесплатного Pages)  
4. **Не** добавляйте README, .gitignore и license при создании (чтобы не было конфликта при первом push)  
5. Нажмите **Create repository**

### Шаг 2. Загрузка кода с компьютера

В PowerShell из папки проекта (`d:\cursor\курсор1`):

```powershell
git init
git add .
git commit -m "Initial commit: corporate culture app"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГИН/ИМЯ_РЕПОЗИТОРИЯ.git
git push -u origin main
```

Подставьте свой логин и имя репозитория. При запросе войдите в GitHub (логин + [Personal Access Token](https://github.com/settings/tokens) вместо пароля).

### Шаг 3. Включить GitHub Pages

1. Репозиторий → **Settings** → **Pages**  
2. **Build and deployment** → **Source**: выберите **GitHub Actions** (не «Deploy from a branch»)  
3. Сохраните

### Шаг 4. Дождаться деплоя

1. Вкладка **Actions** → workflow **Deploy to GitHub Pages**  
2. Дождитесь зелёной галочки (1–3 минуты)  
3. При первом запуске может появиться **Review deployments** → **Approve and deploy**

### Шаг 5. Открыть сайт

Адрес (имя репозитория в URL обязательно):

`https://ВАШ_ЛОГИН.github.io/ИМЯ_РЕПОЗИТОРИЯ/`

Страница «Основные понятия»:

`https://ВАШ_ЛОГИН.github.io/ИМЯ_РЕПОЗИТОРИЯ/#/osnovnye-ponyatiya`

**Не** открывайте `https://ВАШ_ЛОГИН.github.io/` без имени репозитория — будет 404, если это не сайт вида `username.github.io`.

### Если снова 404

| Причина | Что сделать |
|--------|-------------|
| Код не запушен | Выполните шаг 2, на GitHub во вкладке **Code** должны быть файлы и папка `.github` |
| Source = branch | **Settings → Pages → Source → GitHub Actions** |
| Workflow красный | **Actions** → откройте ошибку, исправьте и сделайте **Re-run** |
| Неверный URL | Используйте `...github.io/ИМЯ_РЕПОЗИТОРИЯ/` |

## Сборка вручную

```bash
cd web
npm run build
npm run preview
```

Проверка с путём как на Pages (PowerShell):

```powershell
$env:BASE_URL="/ИМЯ_РЕПОЗИТОРИЯ/"
npm run build
npm run preview
```
