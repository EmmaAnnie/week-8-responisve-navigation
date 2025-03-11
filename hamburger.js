const navToggle = document.getElementById('toggle');
const menuList = document.getElementById('menu');

navToggle.addEventListener('click', function(){
    menuList.classList.toggle('active');
});