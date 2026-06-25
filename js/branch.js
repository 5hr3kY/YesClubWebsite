function showBranch(branch){
    var branch = document.getElementById(branch);
    const slides = document.getElementsByClassName("branch-info");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }   
        branch.style.display = "block";
}

window.addEventListener("load", () => {
    showBranch("ob-section");
});