//    preloader
setTimeout(function () {
    once: true, $(".preloader_bg").fadeToggle();
  }, 1700);


  // backtotop-button
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("back-to-top");

    // Show the button when the user scrolls down 200px from the top
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    };

    // Scroll back to the top when the button is clicked
    button.onclick = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
})