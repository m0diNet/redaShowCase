var mainImage = document.querySelector('#MainImage');
var section1 = document.querySelector('#image-1');
var section2 = document.querySelector('#image-2');
var section3 = document.querySelector('#image-3');
var section4 = document.querySelector('#image-4');
var section5 = document.querySelector('#image-5');
var section6 = document.querySelector('#image-6');

section1.addEventListener("mouseover", function() {
    mainImage.classList.add("newImage1");
});

section2.addEventListener("mouseover", function() {
    mainImage.classList.add("newImage2");
});

section3.addEventListener("mouseover", function() {
    mainImage.classList.add("newImage3");
});

section4.addEventListener("mouseover", function() {
    mainImage.classList.add("newImage4");
});

section5.addEventListener("mouseover", function() {
    mainImage.classList.add("newImage5");
});

section6.addEventListener("mouseover", function() {
    mainImage.classList.add("newImage6");
});

section1.addEventListener("mouseout", function() {
    mainImage.classList.remove("newImage1");
});

section2.addEventListener("mouseout", function() {
    mainImage.classList.remove("newImage2");
});

section3.addEventListener("mouseout", function() {
    mainImage.classList.remove("newImage3");
});

section4.addEventListener("mouseout", function() {
    mainImage.classList.remove("newImage4");
});

section5.addEventListener("mouseout", function() {
    mainImage.classList.remove("newImage5");
});

section6.addEventListener("mouseout", function() {
    mainImage.classList.remove("newImage6");
});