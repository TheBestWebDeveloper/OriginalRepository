currentImageIndex = 0;
images = document.querySelectorAll(".images img");
previousButton = document.querySelector(".previousbutton");
nextButton = document.querySelector(".nextbutton");
descriptions = document.querySelectorAll(".images p");


function showImage(index) {
images.forEach(function(image) {
  image.classList.remove("active"); });
descriptions.forEach(function(description) {
  description.classList.remove("active");
});
images[index].classList.add("active");
descriptions[index].classList.add("active");
}

previousButton.addEventListener("click", function() {
currentImageIndex--;
if (currentImageIndex < 0) {
  currentImageIndex = images.length - 1;
}
showImage(currentImageIndex); });

nextButton.addEventListener("click", function() {
currentImageIndex++;
if (currentImageIndex >= images.length) {
  currentImageIndex = 0;
}
showImage(currentImageIndex); });

setInterval(function() {
nextButton.click();
}, 5000);
