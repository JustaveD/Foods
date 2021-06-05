const icons = document.querySelectorAll(".section-1-icons i");
let counter = 1;
const time = 4000;

const removeAndAddClassChange = () => {
  counter++;
  const icon = document.querySelector(".section-1-icons i.change");

  icon.classList.remove("change");
  if (counter > icons.length) {
    icons[0].classList.add("change");
    counter = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
};

setInterval(removeAndAddClassChange, time);
