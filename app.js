const images = [
  "image/slide2.jpg",
  "image/slide3.jpg",
  "image/slide4.jpg",
  "image/slide6.jpg",
  "image/slide7.jpg",
];

let index = 0;
const slider = document.getElementById("slider");

function changeImage() {
  index = (index + 1) % images.length;
  slider.src = images[index];
}

const intervalId = setInterval(changeImage, 3000);
