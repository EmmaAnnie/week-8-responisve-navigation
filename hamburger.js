const navToggle = document.getElementById('nav-toggle');
const menuList = document.getElementById('main-menu');

navToggle.addEventListener('click', function(){
    menuList.classList.toggle('active');
});