const marqueeInner = document.querySelector('.marquee__inner');
const skillsWrapper = document.querySelector('.skills__wrapper');
const clone = skillsWrapper.cloneNode(true);
marqueeInner.appendChild(clone);
