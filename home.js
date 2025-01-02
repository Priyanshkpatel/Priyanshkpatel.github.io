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

function navigate(id){
    const target = document.getElementById(id);
    target.scrollIntoView({behavior:'smooth',block:'center'});
}

const team = document.getElementById('team');

team.addEventListener('click',() => {
    window.location.href = "team.html";
});


document.addEventListener("DOMContentLoaded", function () {
    const hash = window.location.hash; 
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({
            behavior: "smooth",
            block: "center" 
          });
        }, 10); 
      }
    }
  });