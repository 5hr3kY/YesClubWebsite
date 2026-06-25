function openSection(type) {
    let page = document.getElementById(type);
    let doc = document.getElementsByClassName("involvement-section");

    for ( var i = 0; i<doc.length ; i++){
        doc[i].style.display = "none";
    } 
    page.style.display = "block";

}

window.addEventListener("load", () => {
    let doc = document.getElementsByClassName("involvement-section");
    for (var i = 0; i<doc.length; i++){
        doc[i].style.display = "none";
    }
});

emailjs.init("XCxmKyQire0_XaqTy");

document.getElementById("contact-volunteering").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "email",
        "template_u92hvmf",
        this
    ).then(() => {
        document.getElementById("status").textContent = "Message sent!";
        this.reset();
    }).catch(error => {
        document.getElementById("status").textContent = "Failed to send.";
        console.error(error);
    });
});

document.getElementById("contact-branching").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "email",
        "template_u92hvmf",
        this
    ).then(() => {
        document.getElementById("status").textContent = "Message sent!";
        this.reset();
    }).catch(error => {
        document.getElementById("status").textContent = "Failed to send.";
        console.error(error);
    });
});