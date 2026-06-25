function toVolunteer() {
    window.location.href = "../html/involvement.html";
}
function toDonate() {
    window.location.href = "../html/involvement.html";
}
var heroVideo = document.getElementById("hero-video");

heroVideo.addEventListener("loadedmetadata", () => {
    let hero = document.getElementById("hero");
    let ratio  = heroVideo.videoWidth / heroVideo.videoHeight;
    heroVideo.width= window.screen.width;
    heroVideo.height= window.screen.width  / ratio;

    hero.style.minHeight = heroVideo.height + "px";
});


function sR(carouselType) {
    document.getElementById(carouselType).scrollBy({
        left: 300,
        behavior: "smooth"
    });
}

function sL(carouselType) {
    document.getElementById(carouselType).scrollBy({
        left: -300,
        behavior: "smooth"
    });
}
