# Simple Site with SCSS

## Встановлення та запуск

1. Клонувати репозиторій:
```bash
git clone https://github.com/PalGalya/dz9_simple_site_figma.git
cd dz9_simple_site_figma
```

2. Встановити залежності:
```bash
npm install
```

3. Запустити компіляцію SCSS:
```bash
npm run sass
```

## Структура SCSS

- `/src/scss/abstracts/` - міксини, змінні
- `/src/scss/components/` - компоненти
- `/src/scss/main.scss` - головний файл

## Збірка для продакшену

```bash
npm run build
```

## Опис проекту

Це навчальний проект з рефакторингу CSS в SCSS. Основні особливості:
- Використання міксинів для повторюваних стилів
- Організація змінних через SCSS
- Компонентна структура стилів
- Автоматична збірка через npm scripts
