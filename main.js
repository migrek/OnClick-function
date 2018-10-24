var tab = document.getElementsByClassName('item-pagination');
var  tablist = document.getElementsByClassName('pagination');

tab.addEventListener('click', addClass());

function addClass(e) {
    e.target.classList.add('active-tab');
};
//s[... tablist].indexOf