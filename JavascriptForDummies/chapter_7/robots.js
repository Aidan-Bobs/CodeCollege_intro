document.getElementById("lefteye").style.backgroundColor = "purple";
document.getElementById("head").style.transform = "rotate(-15deg)";
document.getElementById("mouth").style.backgroundColor = "black";
document.getElementById("rightarm").style.width = "5%";
document.getElementById("rightarm").style.left = "22%";

var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);
function moveUpDown(event) {
  var part = event.target;
  var top = 0;
  var id = setInterval(frame, 500); // draw every 10ms
  function frame() {
    part.style.top = top + "%";
    top++;
    if (top === 20) {
      clearInterval(id);
    }
  }
}

var leftArm = document.getElementById("leftarm");

leftArm.addEventListener("click", wave);

function wave(event) {
  var arm = event.target;
  var angle = -90;
  var id = setInterval(frameAngle, 15);
  function frameAngle() {
    arm.style.transform = "rotate(" + angle + "deg)";
    angle += 5;
    if (angle === 5) {
      clearInterval(id);
    }
  }
}
