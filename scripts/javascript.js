const buttons = document.querySelectorAll('.sticky_btn');

buttons.forEach(button => button.addEventListener('click', switchMode));

function switchMode(event){
    if (event.target.classList.contains('sticky_btn--inactive')) {
        const currentActive = document.querySelector('.sticky_btn--active');
        currentActive.classList.remove('sticky_btn--active');
        currentActive.classList.add('sticky_btn--inactive');

        event.target.classList.add('sticky_btn--active');
        event.target.classList.remove('sticky_btn--inactive');

        if (document.documentElement.classList.contains('light')){
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        } else if (document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        } else {

        };
    };
};