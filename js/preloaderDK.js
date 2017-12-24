/*
 preloaderDK v1.0.0 | https://github.com/dimakrivenko/preloaderDK | MIT/GPL2 Licensed
*/

function preloaderDK (params) {
    if (params.el !== undefined) {
        var preloader     = document.querySelector(params.el),
            preloaderTextblock = document.querySelector('.preloaderDK__textblock'),
            preloaderProgress = document.querySelector('.preloaderDK__progress'),
            preloaderLine = document.querySelector('.preloaderDK__progress__line'),
            imagesCount   = document.getElementsByTagName('img').length,
            dBody         = document.querySelector('body'),
            percent       = 100 / imagesCount,
            progress      = 0,
            imgSum        = 5,
            loadedImg     = 0;

        // Visible text block
        if (params.showTextBlock !== undefined && params.showTextBlock === true) {
            preloaderTextblock.classList.add('is-active');
        } else {
            preloaderTextblock.classList.remove('is-active');
        }

        // Visible progress bar
        if (params.showProgressBar !== undefined && params.showProgressBar === true) {

            preloaderProgress.classList.add('is-active');
        } else {
            preloaderProgress.classList.remove('is-active');
        }

        if (imagesCount >= imgSum && imagesCount > 0) {
            for (var i = 0; i < imagesCount; i++) {
                var img_copy     = new Image();
                img_copy.src     = document.images[i].src;
                img_copy.onload  = img_load;
                img_copy.onerror = img_load;
            }

            function img_load () {
                progress += percent;
                loadedImg++;
                if (progress >= 100 || loadedImg == imagesCount) {
                    setTimeout(function () {
                        preloader.classList.remove('is-active');
                    }, 1000);
                    setTimeout(function () {
                        preloader.parentNode.removeChild(preloader);
                    }, 1500);
                }
                preloaderLine.style.width = progress + '%';
            }
        } else {
            preloaderLine.style.width =  '100%';

            setTimeout(function () {
                preloader.classList.remove('is-active');
            }, 1000);
            setTimeout(function () {
                preloader.parentNode.removeChild(preloader);
            }, 1500);
        }
    } else {
        console.error('preloaderDK cannot found element');
    }
}
