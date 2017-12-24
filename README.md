# preloaderDK - простой и гибкий экран предзагрузки сайта

## Определение
Для начала работы, вам необходимо подключить CSS файл `preloaderDK.css` в теле тега `<head>`
``` html
<head>
    <link rel="stylesheet" href="./css/preloaderDK.css">
</head>
```
Следующим шагом нужно добавить HTML, подключить JavaScript файл `preloaderDK.js`, и определить его вызов. Добавим это после открывающегося тега `<body>`
``` html
<!-- preloaderDK - BEGIN -->
<div id="preloaderDK" class="is-active">
    <div class="preloaderDK__inner">
        <div class="preloaderDK__textblock">
            <div class="preloaderDK__textblock__logo">
                <img src='./img/logo.jpg' alt='logotype' />
            </div>
            <div class="preloaderDK__textblock__text">
                <span>Your text</span>
            </div>
        </div>
        <div class="preloaderDK__progress">
            <div class="preloaderDK__progress__line"></div>
        </div>
    </div>
</div>

<script src="./js/preloaderDK.js"></script>
<script>
    window.onload = function() {
        preloaderDK({
            el: '#preloaderDK', // Элемент preloaderDK
            showTextBlock: true, // Отображение текта и логотипа
            showProgressBar: true // Отображение прогресса загрузки
        })
    }
</script>
<!-- preloaderDK - END -->
```

## Параметры вызова

| Параметр | Тип | По умолчанию | Описание |
| ------ | ------ | ------ | ------ |
| el | string | нет | Обязятельный параметр. HTML елемент preloaderDK. |
| showTextBlock | boolean | false | Отображение текста и логотипа `true` или `false` |
| showProgressBar | boolean | false | Отображение прогресса загрузки `true` или `false` |
