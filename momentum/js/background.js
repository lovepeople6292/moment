const images = [
  "001.jpg",
  "002.jpg",
  "003.jpg",
  "004.jpg",
  "005.jpg",
  "006.jpg",
  "007.jpg",
  "008.jpg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];

// const img = document.createElement("img");
// img.src = `img/${chosenImage}`;
// img.classList.add("imgClass");
// document.body.appendChild(img);

document.body.style.backgroundImage = `url(img/${chosenImage})`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
