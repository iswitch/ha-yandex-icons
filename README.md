[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)

# Иконки Яндекс устройств для Home Assistant
Пак иконок (умных устройств с Алисой) для Home Assistant (актуально для плагина [YandexStation](https://github.com/AlexxIT/YandexStation))

## Инструкции
Чтобы добавить эти иконки в Home Assistant, нужно выполнить простые шаги:

1) Скопируйте в папку www вашего Home Assistant или установить через HACS.
2) Добавьте этот код в configuration.yaml:
```
lovelace:
  resources:
    - url: /hacsfiles/ha-yandex-icons/yandex-icons.js
      type: module  
```

Чтобы использовать иконки, просто напишите "yandex:station".

Список доступных имен:
```
alisa
station
station-mini
module
dexp-smartbox
elari-smartbeat
irbis-a
lg-xboom-wk7y
prestigio-smartmate
```

## Пример
![Media player](https://raw.githubusercontent.com/iswitch/ha-yandex-icons/master/docs/media_player.png "Media player")
