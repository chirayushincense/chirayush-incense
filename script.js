function scrollToSection(sectionId) { document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' }); }

document.addEventListener("DOMContentLoaded", function() { const buttons = document.querySelectorAll(".product button");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        alert("More details coming soon!");
    });
});

});
