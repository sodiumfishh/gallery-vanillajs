const buttons = document.querySelectorAll(".btn");
const images = document.querySelectorAll(".thumbnail");
const mainImageContainer = document.querySelector(".main-image-container");

let currentImageNumber = 0;
let currentImage;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "prev-img") {
      currentImageNumber === 0
        ? (currentImageNumber = images.length - 1)
        : currentImageNumber--;

      displayImage();
    } else if (e.target.id === "next-img") {
      currentImageNumber === images.length - 1
        ? (currentImageNumber = 0)
        : currentImageNumber++;
      displayImage();
    }
  });
});

const displayImage = () => {
  mainImageContainer.innerHTML = "";
  currentImage = images[currentImageNumber];
  images.forEach((img, index) =>
    index === currentImageNumber
      ? (img.classList.add("img-focus"))
      : (img.classList.remove("img-focus"))
  );
  mainImageContainer.innerHTML = `<img src=${currentImage.src} />`;
};

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentImageNumber = index;
    displayImage();
  });
});

displayImage()