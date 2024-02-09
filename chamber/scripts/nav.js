const hamButton = document.querySelector('#hamburger_menu');
const navigation = document.querySelector('.navbar');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});