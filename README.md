[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg?style=for-the-badge)](https://github.com/hacs/integration)

# Иконки Яндекс устройств для Home Assistant
Пак иконок умных устройств с Алисой для Home Assistant (актуально для плагина [YandexStation](https://github.com/AlexxIT/YandexStation))

## Инструкции
Чтобы добавить эти иконки в Home Assistant, нужно выполнить простые шаги:

1. Найти и установить в HACS **Yandex Icons**
2. Добавьте этот код в configuration.yaml:

```yaml
frontend:
  extra_module_url:
    - /hacsfiles/ha-yandex-icons/yandex-icons.js 
```
Или так:
```yaml
lovelace:
  resources:
    - url: /local/community/ha-yandex-icons/yandex-icons.js
      type: module  
```
Или так:
```yaml
lovelace:
  resources:
    - url: /hacsfiles/ha-yandex-icons/yandex-icons.js
      type: module  
```


А также можно через UI Home Assistant в ресурсах Lovelace

[![Open your Home Assistant instance and show your Lovelace resources.](https://my.home-assistant.io/badges/lovelace_resources.svg)](https://my.home-assistant.io/redirect/lovelace_resources/)

## Пример

| Иконка                                                                                                                                      | Имя                        |
|:--------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|
| ![Алиса](https://raw.githubusercontent.com/iswitch/ha-yandex-icons/master/docs/alisa.svg "Алиса")                                           | yandex:alisa               |
| ![Яндекс.Станция](https://raw.githubusercontent.com/iswitch/ha-yandex-icons/master/docs/station.svg "Яндекс.Станция")                       | yandex:station             |
| ![Яндекс.Станция Макс](https://raw.githubusercontent.com/iswitch/ha-yandex-icons/master/docs/station-max.svg "Яндекс.Станция Макс")         | yandex:station-max         |
| ![Яндекс.Станция 2](https://raw.githubusercontent.com/iswitch/ha-yandex-icons/master/docs/station-2.svg "Яндекс.Станция 2")                 | yandex:station-2           |
| ![Яндекс.Станция Мини](https://raw.githubusercontent.com/iswitch/ha-yandex-icons/master/docs/station-mini.svg "Яндекс.Станция Мини")        | yandex:station-mini        |
| ![Яндекс.Станция Мини](https://raw.githubusercontent.com/iswitch/ha-yandex-icons/master/docs/station-mini-2.svg "Яндекс.Станция Мини 2")    | yandex:station-mini-2      |
| ![Яндекс.Станция Лайт](https://raw.githubusercontent.com/iswitch/ha-yandex-icons/master/docs/station-lite.svg "Яндекс.Станция Лайт")        | yandex:station-lite        |
| ![Яндекс.Модуль](https://raw.githubusercontent.com/iswitch/ha-yandex-icons/master/docs/module.svg "Яндекс.Модуль")                          | yandex:module              |
| ![Яндекс.Модуль](https://raw.githubusercontent.com/iswitch/ha-yandex-icons/master/docs/module-2.svg "Яндекс.Модуль 2")                      | yandex:module-2            |
| ![DEXP Smartbox](https://raw.githubusercontent.com/iswitch/ha-yandex-icons/master/docs/dexp-smartbox.svg "DEXP Smartbox")                   | yandex:dexp-smartbox       |
| ![Elari SmartBeat](https://raw.githubusercontent.com/iswitch/ha-yandex-icons/master/docs/elari-smartbeat.svg "Elari SmartBeat")             | yandex:elari-smartbeat     |
| ![Irbis A](https://raw.githubusercontent.com/iswitch/ha-yandex-icons/master/docs/irbis-a.svg "Irbis A")                                     | yandex:irbis-a             |
| ![LG XBOOM AI ThinQ WK7Y](https://raw.githubusercontent.com/iswitch/ha-yandex-icons/master/docs/lg-xboom-wk7y.svg "LG XBOOM AI ThinQ WK7Y") | yandex:lg-xboom-wk7y       |
| ![Prestigio Smartmate](https://raw.githubusercontent.com/iswitch/ha-yandex-icons/master/docs/prestigio-smartmate.svg "Prestigio Smartmate") | yandex:prestigio-smartmate |
| ![JBL Link Music](https://raw.githubusercontent.com/iswitch/ha-yandex-icons/master/docs/jbl-link-music.svg "JBL Link Music")                | yandex:jbl-link-music      |
| ![JBL Link Portable](https://raw.githubusercontent.com/iswitch/ha-yandex-icons/master/docs/jbl-link-portable.svg "JBL Link Portable")       | yandex:jbl-link-portable   |
