let nav = document.getElementById('navMenu');
let button = document.querySelector('.menu-opener');

window.addEventListener('resize', () => {sizeCheck()});

button.addEventListener('click', () => {
    if(nav.style.display == 'block'){
        nav.style.display = 'none';
    }else{
        nav.style.display = 'block';
    }
});

function sizeCheck(){
    if(window.screen.width >= 800){
        nav.style.display = 'block';
    }else if(window.screen.width < 800){
        nav.style.display = 'none';
    }
}