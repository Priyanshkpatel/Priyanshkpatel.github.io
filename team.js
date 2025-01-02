document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("nav_centre");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) { // Change color after scrolling 50px
            navbar.id="scrolled";
            console.log("hi")
        } else {
            navbar.id="nav_centre";
            console.log("hi2")
        }
    });
});

const home= document.getElementById('team');

home.addEventListener('click',() => {
    window.location.href = 'https://teamopinaka.me';
});


function navigate(id){
    window.location.href = 'https://teamopinaka.me#'+id;
}
