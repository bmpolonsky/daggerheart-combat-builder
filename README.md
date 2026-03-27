# Daggerheart Combat Builder

Локальный конструктор столкновений для Daggerheart с:

- поиском и фильтрацией противников;
- подсчётом бюджета боя;
- сохранением текущей встречи в `localStorage`;
- предзагрузкой JSON и изображений на этапе `predev`/`prebuild`;
- статической сборкой для GitHub Pages.

## Команды

```bash
npm install
npm run dev
npm run build
```

## Источник данных

Во время `predev` и `prebuild` скрипт [`scripts/cache-assets.mjs`](./scripts/cache-assets.mjs)
скачивает противников из `https://daggerheart.su/api/adversary?lang=ru` и сохраняет их в `public/data`,
а также подтягивает изображения противников в `public/image`.
