window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var stickyButton = document.getElementById("stickyButton");
  
  // Check if the scroll position is at the top of the page
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // If not at the top, show the sticky button
    stickyButton.style.display = "block";
  } else {
    // If at the top, hide the sticky button
    stickyButton.style.display = "none";
  }
}


window.onload = function() {
  var stickyButton = document.getElementById("stickyButton");

  // Add click event listener to the sticky button
  stickyButton.addEventListener("click", function() {
    // Scroll the page to the top smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
};
