const icons = document.querySelectorAll('.section-1-icons i');

let counter = 1;
let time = 4000;
const addAndRemoveClassChangeToIconSlide = () =>{
    counter++;

    let icon = document.querySelector('.change');
    icon.classList.remove('change');

    if(counter > icons.length){
        icons[0].classList.add('change');
        counter = 1;
    }
    else{
        icon.nextElementSibling.classList.add('change');
    }
}
setInterval(addAndRemoveClassChangeToIconSlide,time);