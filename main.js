document.addEventListener("DOMContentLoaded", ready);

function ready(){
    let tab = document.getElementsByClassName('item-pagination');
    let  tablist = document.getElementsByClassName('pagination');

    tab.addEventListener('click', function(e) {
        e.classList.add('active-tab');
});
}

/*for (var i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', function(event) {
        event.classList.add('active-tab');
    });
}*/


/*var tab = document.getElementsByClassName('item-pagination');
var  tablist = document.getElementsByClassName('pagination');

tab.addEventListener('click', addClass());

function addClass(e) {
    e.target.classList.add('active-tab');
};*/
//s[... tablist].indexOf