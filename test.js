function updateHeaderClassOnScroll() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos > 0) {
        $(".header").addClass("scrolled");
        $("#backToTopLink").fadeIn(); // Show back to top link when scrolling begins
    } else {
        $(".header").removeClass("scrolled");
        $("#backToTopLink").fadeIn(); // Hide back to top link when scrolling to top
    }
  }
  
  function toggleBurger() {
    $(".header_burger").click(function(event) {
        $(".header_burger, .header_menu, .header_link").toggleClass("active");
        $("body").toggleClass("lock");
    });
  }
  
  function scrollToTop() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }
  
  $(window).on("scroll", updateHeaderClassOnScroll);
  
  $(document).ready(function() {
    updateHeaderClassOnScroll();
    toggleBurger();
  
    // Add click event listener to the link that scrolls to top
    $("#backToTopLink").click(function(event) {
        event.preventDefault(); // Prevent default link behavior
        scrollToTop(); // Call the scrollToTop function
    });
  });