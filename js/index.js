// menu
document.getElementById('menu-btn').onclick = function openMenu() {
    document.getElementById('menu').style = 'opacity: 1; z-index:999';
    document.getElementsByTagName('main')[0].style = 'opacity: 0; z-index:-1';
    document.getElementsByTagName('footer')[0].style = 'opacity: 0; z-index:-1';
}

document.getElementById('close-btn').onclick = function closeMenu() {
    document.getElementById('menu').style = 'opacity: 0;z-index:-1';
    document.getElementsByTagName('main')[0].style = 'opacity: 1; z-index:999';
    document.getElementsByTagName('footer')[0].style = 'opacity: 1; z-index:999';
}

document.getElementById('contact-btn').onclick = function closeMenu() {
    document.getElementById('menu').style = 'opacity: 0', 'z-index:-1';
    document.getElementsByTagName('main')[0].style = 'opacity: 1; z-index:999';
    document.getElementsByTagName('footer')[0].style = 'opacity: 1; z-index:999';
}

// document.getElementById('menu-btn').onclick = function openMenu() {
//     document.getElementById('menu').style = 'display: block';
//     document.getElementsByTagName('main')[0].style = 'display: none';
//     document.getElementsByTagName('footer')[0].style = 'display: none';
// }

// document.getElementById('close-btn').onclick = function closeMenu() {
//     document.getElementById('menu').style = 'display: none';
//     document.getElementsByTagName('main')[0].style = 'display: block';
//     document.getElementsByTagName('footer')[0].style = 'display: flex';
// }

// document.getElementById('contact-btn').onclick = function closeMenu() {
//     document.getElementById('menu').style = 'display: none';
//     document.getElementsByTagName('main')[0].style = 'display: block';
//     document.getElementsByTagName('footer')[0].style = 'display: flex';
// }

// applying shadows
let RGB = ['red', 'green', 'blue'];
let randomIndex = Math.floor(Math.random() * 3);

// https://jsfiddle.net/6n0tk3a3/2/ - text shadow
// http://jsfiddle.net/KdzQ7/ - letter scanning

$(function () {
    $('.text').each(function () {
        let txt = $(this).text();
        let html = '';
        for (letter in txt) {
            html = html + '<span class="shadows">' + txt[letter] + '</span>';
        }
        $(this).html(html);

        let shadowApply = document.getElementsByClassName('shadows');
        for (let i = 0; i < shadowApply.length; i++) {
            shadowApply[i].onmouseover = function (e) {
                let RGB = ['red', 'green', 'blue'];
                let randomIndex = Math.floor(Math.random() * 3);

                //random RGB colors
                // let shadowColor = '0px 0px 10px ' + RGB[randomIndex]; + ')';

                //random ALL colors
                let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
                let shadowColor = '0px 0px 10px ' + color;

                this.style['text-shadow'] = shadowColor;
                this.style['-webkit-text-shadow'] = shadowColor;
                this.style['-moz-text-shadow'] = shadowColor;
            }

            shadowApply[i].onmousedown = function (e) {
                let RGB = ['red', 'green', 'blue'];
                let randomIndex = Math.floor(Math.random() * 3);

                //random RGB colors
                // let shadowColor = '0px 0px 10px ' + RGB[randomIndex]; + ')';

                //random ALL colors
                let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
                let shadowColor = '0px 0px 10px ' + color;

                this.style['text-shadow'] = shadowColor;
                this.style['-webkit-text-shadow'] = shadowColor;
                this.style['-moz-text-shadow'] = shadowColor;
            }

            shadowApply[i].ontouchstart = function (e) {
                let RGB = ['red', 'green', 'blue'];
                let randomIndex = Math.floor(Math.random() * 3);

                //random RGB colors
                // let shadowColor = '0px 0px 10px ' + RGB[randomIndex]; + ')';

                //random ALL colors
                let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
                let shadowColor = '0px 0px 10px ' + color;

                this.style['text-shadow'] = shadowColor;
                this.style['-webkit-text-shadow'] = shadowColor;
                this.style['-moz-text-shadow'] = shadowColor;
            }
        }

        // touchscreen hover
        // $(document).ready(function () {
        //     $('.shadows').on('touchstart touchend', function (e) {
        //         // e.preventDefault();
        //         $(this).toggleClass('hover_effect');
        //     });
        // });

    });
});

// landing section background color
let r = Math.floor(Math.random() * 128) + 128;
let g = Math.floor(Math.random() * 128) + 128;
let b = Math.floor(Math.random() * 128) + 128;
document.getElementById('landing').style = 'background-color: rgb(' + r + ',' + g + ',' + b + ')';