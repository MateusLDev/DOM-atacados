const collapse = document.getElementsByClassName('menu-collapse');
const menu = document.getElementsByClassName('list-items');

collapse.click(function(){
    menu.classList.toggle('open')
})