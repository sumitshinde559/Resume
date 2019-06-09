
$("document").ready(function() {
  $(".fa-facebook-square").click(callFb);
  function callFb() {
    window.open(
      "https://www.facebook.com/profile.php?id=100001313638843",
      "_blank"
    );
    }

    $(".fa-linkedin-in").click(callLinkedIn);
    function callLinkedIn() {
      window.open(
        "https://www.linkedin.com/in/sumitshinde",
        "_blank"
      );
    }
  
    $(".fa-twitter").click(callTwitter);
    function callTwitter() {
      window.open(
        "https://twitter.com/sumitshindeS",
        "_blank"
      );
    }
  
  $(".fa-instagram").click(callInsta);
  function callInsta() {
    window.open(
      "https://www.instagram.com/_____sumitshinde_____/",
      "_blank"
    );
  }

});

$('.btn-warning').click(function() {
    $('html, body').animate({
        scrollTop: $("#sec_skills").offset().top
    }, 1000);
 });