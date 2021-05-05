const icons = document.querySelectorAll('.section-1-icons i');

let counter = 1;
setInterval(()=>{
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

},1000)