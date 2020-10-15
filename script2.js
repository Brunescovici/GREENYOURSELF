window.onscroll = function() {scrollFunction()};
document.getElementById("volButDown").addEventListener("click", goTo)

function goTo() {
    window.location.href = 'volunteer.html';
}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav_logo").src="res/logos/small_logo.png";
      document.getElementById("first_a").style.color = "#000000";
      document.getElementById("second_a").style.color = "#000000";
      document.getElementById("third_a").style.color = "#000000";
  } else {
    document.getElementById("nav_logo").src="res/logos/logo.png";
      document.getElementById("first_a").style.color = "#FFFFFF";
      document.getElementById("second_a").style.color = "#FFFFFF";
      document.getElementById("third_a").style.color = "#FFFFFF";
  }
}
