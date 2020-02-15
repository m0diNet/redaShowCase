var mainImage = document.querySelector('#MainImage');

var section = [];

var info = [
    "Image1: Thinking longingly about tuna brine slap owner's face at 5am until human fills food dish yet kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment white cat sleeps on a black shirt so purr while eating tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad .",
    "Image2: Thinking longingly about tuna brine slap owner's face at 5am until human fills food dish yet kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment white cat sleeps on a black shirt so purr while eating tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad .",
    "Image3: Thinking longingly about tuna brine slap owner's face at 5am until human fills food dish yet kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment white cat sleeps on a black shirt so purr while eating tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad .",
    "Image4: Thinking longingly about tuna brine slap owner's face at 5am until human fills food dish yet kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment white cat sleeps on a black shirt so purr while eating tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad .",
    "Image5: Thinking longingly about tuna brine slap owner's face at 5am until human fills food dish yet kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment white cat sleeps on a black shirt so purr while eating tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad .",
    "Image6: Thinking longingly about tuna brine slap owner's face at 5am until human fills food dish yet kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment white cat sleeps on a black shirt so purr while eating tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad ."
]

for (var i = 1; i < 7; i++) {
    section[i] = document.querySelector('#image-' + i);
}

section[1].addEventListener("mouseover", function() {
    mainImage.classList.add("newImage1");
});

section[2].addEventListener("mouseover", function() {
    mainImage.classList.add("newImage2");
});

section[3].addEventListener("mouseover", function() {
    mainImage.classList.add("newImage3");
});

section[4].addEventListener("mouseover", function() {
    mainImage.classList.add("newImage4");
});

section[5].addEventListener("mouseover", function() {
    mainImage.classList.add("newImage5");
});

section[6].addEventListener("mouseover", function() {
    mainImage.classList.add("newImage6");
});

section[1].addEventListener("mouseout", function() {
    mainImage.classList.remove("newImage1");
});

section[2].addEventListener("mouseout", function() {
    mainImage.classList.remove("newImage2");
});

section[3].addEventListener("mouseout", function() {
    mainImage.classList.remove("newImage3");
});

section[4].addEventListener("mouseout", function() {
    mainImage.classList.remove("newImage4");
});

section[5].addEventListener("mouseout", function() {
    mainImage.classList.remove("newImage5");
});

section[6].addEventListener("mouseout", function() {
    mainImage.classList.remove("newImage6");
});

section[1].addEventListener("click", function() {
    $('.information').addClass('d-block');
    document.getElementById('Title').textContent = 'Image-1';
    document.getElementById('Content').textContent = info[0];
    $('#imageDisplay').attr('src', '../public/images/smartphone-1.png')
});
section[2].addEventListener("click", function() {
    $('.information').addClass('d-block');
    document.getElementById('Title').textContent = 'Image-2';
    document.getElementById('Content').textContent = info[1];
    $('#imageDisplay').attr('src', '../public/images/smartphone-2.png')
});
section[3].addEventListener("click", function() {
    $('.information').addClass('d-block');
    document.getElementById('Title').textContent = 'Image-3';
    document.getElementById('Content').textContent = info[2];
    $('#imageDisplay').attr('src', '../public/images/smartphone-3.png')
});
section[4].addEventListener("click", function() {
    $('.information').addClass('d-block');
    document.getElementById('Title').textContent = 'Image-4';
    document.getElementById('Content').textContent = info[3];
    $('#imageDisplay').attr('src', '../public/images/smartphone-4.png')
});
section[5].addEventListener("click", function() {
    $('.information').addClass('d-block');
    document.getElementById('Title').textContent = 'Image-5';
    document.getElementById('Content').textContent = info[4];
    $('#imageDisplay').attr('src', '../public/images/smartphone-5.png')
});
section[6].addEventListener("click", function() {
    $('.information').addClass('d-block');
    document.getElementById('Title').textContent = 'Image-6';
    document.getElementById('Content').textContent = info[5];
    $('#imageDisplay').attr('src', '../public/images/smartphone-6.png')
});

$('#close').click(function() {
    $('.information').removeClass('d-block');
});

$('.information').click(function() {
    $('.information').removeClass('d-block');
});