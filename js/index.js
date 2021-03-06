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
                let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
                let shadowColor = '0px 0px 10px ' + color;

                this.style['text-shadow'] = shadowColor;
                this.style['-webkit-text-shadow'] = shadowColor;
                this.style['-moz-text-shadow'] = shadowColor;
            }

            shadowApply[i].onmousedown = function (e) {
                let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
                let shadowColor = '0px 0px 10px ' + color;

                this.style['text-shadow'] = shadowColor;
                this.style['-webkit-text-shadow'] = shadowColor;
                this.style['-moz-text-shadow'] = shadowColor;
            }

            shadowApply[i].ontouchstart = function (e) {
                let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
                let shadowColor = '0px 0px 10px ' + color;

                this.style['text-shadow'] = shadowColor;
                this.style['-webkit-text-shadow'] = shadowColor;
                this.style['-moz-text-shadow'] = shadowColor;
            }
        }
    });
});

// landing section background color
let r = Math.floor(Math.random() * 128) + 128;
let g = Math.floor(Math.random() * 128) + 128;
let b = Math.floor(Math.random() * 128) + 128;
document.getElementById('landing').style = 'background-color: rgb(' + r + ',' + g + ',' + b + ')';