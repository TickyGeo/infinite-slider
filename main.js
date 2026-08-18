const slider = document.querySelector('.slider');
const logos = document.querySelector('.slider .logos');
const copy = logos.cloneNode(true);
copy.setAttribute('aria-hidden', 'true');
slider.appendChild(copy);