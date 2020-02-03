$(document).ready(function () {
  $(".parcours-box").removeClass("parcours-active");


  $(".round1").on("click", function () {
    $(".tl-round").css("background-color", "rgb(85, 69, 69)");
    $(".round1").css("background-color", "white");
    $(".parcours-active").removeClass("parcours-active");
    $(".parc1").addClass("parcours-active");
    $(".timeline-indicator").css("width", "0");
  })

  $(".round2").on("click", function () {
    $(".tl-round").css("background-color", "rgb(85, 69, 69)");
    $(".round1").css("background-color", "white");
    $(".round2").css("background-color", "white");
    $(".parcours-active").removeClass("parcours-active");
    $(".parc2").addClass("parcours-active");
    $(".timeline-indicator").css("width", "240");
  })

  $(".round3").on("click", function () {
    $(".tl-round").css("background-color", "rgb(85, 69, 69)");
    $(".round1").css("background-color", "white");
    $(".round2").css("background-color", "white");
    $(".round3").css("background-color", "white");
    $(".parcours-active").removeClass("parcours-active");
    $(".parc3").addClass("parcours-active");
    $(".timeline-indicator").css("width", "480");
  })

  $(".round4").on("click", function () {
    $(".tl-round").css("background-color", "rgb(85, 69, 69)");
    $(".round1").css("background-color", "white");
    $(".round2").css("background-color", "white");
    $(".round3").css("background-color", "white");
    $(".round4").css("background-color", "white");
    $(".parcours-active").removeClass("parcours-active");
    $(".parc4").addClass("parcours-active");
    $(".timeline-indicator").css("width", "720");
  })

});

// BUTTON TO SCROLL BACK TO THE TOP OF THE PAGE:

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// BUTTON FOR PHONE NUMBER
// When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}