// open and close navigation bar
let navigation = document.querySelector(".header-area .nav");
let menuToggle = document.querySelector(".header-area .menu-toggle");

function toggleNavigation() {
    navigation.classList.toggle("opened-navigation")
    menuToggle.classList.toggle("clicked-menu");
}

// open and close video
let videoPlayerButton = document.getElementById("videoPlayer");
let videoCloseButton = document.querySelector("#videoFullScreen .close");
let videoFullScreen = document.getElementById("videoFullScreen");

function playVideo() {
    videoFullScreen.classList.add("video-shown");
}

function closeVideo() {
    videoFullScreen.classList.remove("video-shown");
}

// animate progress on scroll
let progressBars = document.querySelectorAll(".features .progress .progress-bar span");
let progressBarsValues = document.querySelectorAll(".features .progress-value");
let features = document.querySelector(".features");

window.onscroll = () => {
    if (window.scrollY >= features.offsetTop - 500) {
        progressBars.forEach((progressBar) => {
            progressBar.style.width = progressBar.dataset.progress;
        });
    }
}