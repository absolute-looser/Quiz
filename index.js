document.getElementById("quiz").onsubmit = function () {
  var PM = parseInt(document.querySelector('input[name = "PM"]:checked').value);
  var CM = parseInt(document.querySelector('input[name = "CM"]:checked').value);
  var HM = parseInt(document.querySelector('input[name = "HM"]:checked').value);
  var VP = parseInt(document.querySelector('input[name = "VP"]:checked').value);
  var result = PM + CM + HM + VP;
  var result2;
  if (result == 0) {
    result2 =
      "Why are we still here.<br /><img src='images/none.jpg' width='300'/>";
  }
  if (result == 25) {
    result2 = "L lag gye.<br /><img src='images/poor.jpg'  width='300'/>";
  }
  if (result == 50) {
    result2 =
      "Tum to bade heavy driver ho.<br /><img src='images/avg.jpg' width='300'/>";
  }
  if (result == 75) {
    result2 = "OO ma tu ru la.<br /><img src='images/above.jpg' width='300'/>";
  }
  if (result == 100) {
    result2 =
      "okay done let's get going<br /><img src='images/excellent.jpg' width='300'/>";
  }
  document.getElementById("grade2").innerHTML = result2;
  document.getElementById("grade").innerHTML = result;
};
var form = document.getElementById("quiz");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);
