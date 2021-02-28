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

// menu button background color
let menuBtn = document.getElementById('menu-btn');
let closeBtn = document.getElementById('close-btn');
menuBtn.style = 'background-color: rgb(' + r + ',' + g + ',' + b + ')';
closeBtn.style = 'background-color: rgb(' + r + ',' + g + ',' + b + ')';