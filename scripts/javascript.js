const buttons = document.querySelectorAll('.sticky_btn');

buttons.forEach(button => button.addEventListener('click', switchMode));

function switchMode(event){
    if (event.target.classList.contains('sticky_btn--inactive')) {
        const currentActive = document.querySelector('.sticky_btn--active');
        currentActive.classList.remove('sticky_btn--active');
        currentActive.classList.add('sticky_btn--inactive');

        event.target.classList.add('sticky_btn--active');
        event.target.classList.remove('sticky_btn--inactive');
    }
};