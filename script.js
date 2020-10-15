document.querySelector("#T1").addEventListener("click", changeT1);
document.querySelector("#T2").addEventListener("click", changeT2);
document.querySelector("#T3").addEventListener("click", changeT3);
document.querySelector("#T4").addEventListener("click", changeT4);

function changeT1() {
    document.querySelector("#item_img").src = "res/img/rewards/reward1.png";
    document.querySelector("#item p").textContent = "500 POINTS";
    document.querySelector("#T_explain").textContent = "This is the lowest tier, which you automatically join by becoming a member. At sign up, you receive an e-mail with a long explanation of the system and quick tips on how to become a prized member of our society. The forum becomes visible and after your first 100 points, you are able to participate in discussions.";
}

function changeT2() {
    document.querySelector("#item_img").src = "res/img/rewards/reward2.png";
    document.querySelector("#item p").textContent = "1000 POINTS";
    document.querySelector("#T_explain").textContent = "Our second tier. It unlocks when you gain 500 points and have participated in at least one event. The prize for reaching this tier is a water bottle with our logo. Don't forget to hydrate yourself!";
}

function changeT3() {
    document.querySelector("#item_img").src = "res/img/rewards/reward3.png";
    document.querySelector("#item p").textContent = "2500 POINTS";
    document.querySelector("#T_explain").textContent = "The third tier takes a bit longer to reach - you need to have participated in a minimum of three events and have gained at least 1000 points. The prize is a reusable coffee cup with our logo. You can choose any color you want!";
}

function changeT4() {
    document.querySelector("#item_img").src = "res/img/rewards/reward4.png";
    document.querySelector("#item p").textContent = "5000 POINTS";
    document.querySelector("#T_explain").textContent = "Woa! You sure love volunteering, don't you? To reach this milestone in your journey, you need to have participated in a minimum of five events and have accumulated 2500 points. A color customizable shirt is sent out as a thank you gift and a small bagpack to use for shopping.";
}

window.onscroll = function() {scrollFunction()};

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
