const menuBtn = document.getElementById('menu_btn');
const navigation = document.getElementById('navbar');

menuBtn.addEventListener('click', ()=> {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
});