document.addEventListener("DOMContentLoaded", ready);

function ready(){
    var  tab = document.querySelector('.pagination');
    var tabList = document.querySelectorAll('.item-pagination');
    var imgList = document.querySelectorAll('.slide-item');
    tab.addEventListener('click', function(e) {
        var curTab =  [...tabList].indexOf(e.target);
            for (var i = 0; i < tabList.length; i++) {
                tabList[i].classList.remove('active-tab');
                imgList[i].classList.remove('active');}
            tabList[curTab].classList.add('active-tab');
            imgList[curTab].classList.add('active');
});
}