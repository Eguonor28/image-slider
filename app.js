// create an array called image and store the images
const images = [
  "image/slide2.jpg",
  "image/slide3.jpg",
  "image/slide4.jpg",
  "image/slide6.jpg",
  "image/slide7.jpg",
];

// set the initial index to 0
let index = 0;
const slider = document.getElementById("slider");

function changeImage() {
  index = (index + 1) % images.length; //Uses the modulus operator (%) to wrap around to 0 when reaching the end
  slider.src = images[index]; //updates the image source of the slider element
}

const intervalId = setInterval(changeImage, 3000);
//A built-in JavaScript function that repeatedly calls another function at fixed time intervals
