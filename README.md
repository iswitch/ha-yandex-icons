# Иконки Яндекс устройств для Home Assistant
Пак иконок (умных колонок с Алисой) для Home Assistant 

## Инструкции
Чтобы добавить эти иконки в Home Assistant, нужно выполнить простые шаги:

1) Скопируйте в папку www вашего Home Assistant.
2) Добавьте этот код в configuration.yaml:

```
frontend:
  extra_html_url:
    - /local/yandex-icons.html
```

Чтобы использовать иконки, просто напишите "yandex:station".

Список доступных имен:
```
station
station-mini
dexp-smartbox
elari-smartbeat
irbis-a
lg-xboom-wk7y
prestigio-smartmate
```

## Пример
![Media player](/docs/media_player.png "Media player")