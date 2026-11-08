const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const message = document.getElementById("formMessage");

    message.innerHTML = "Thank you " + name + "! Your message is ready.";

    contactForm.reset();

});