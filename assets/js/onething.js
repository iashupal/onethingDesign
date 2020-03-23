$(function() {
    $("#mySlider1").AnimatedSlider( { prevButton: "#btn_prev", 
                                     nextButton: "#btn_next",
                                     visibleItems: 3,
                                     infiniteScroll: true,
                                     autoPlay: true,
                                     speed: 1000,
                                     autoplaySpeed: 1000,
                                     willChangeCallback: function(obj, item) { $("#statusText").text("Will change to " + item); },
                                         changedCallback: function(obj, item) { $("#statusText").text("Changed to " + item); }
                                  });
                                });
    

// accprdian js
$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  })


// menu
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}