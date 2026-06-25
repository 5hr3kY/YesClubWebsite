emailjs.init("XCxmKyQire0_XaqTy");

document.getElementById("contact-form").addEventListener("submit", function(e) {
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