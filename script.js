$(document).ready(function() {
  $("#target1").addClass('fadein');  
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');
var modal6 = document.getElementById('myModal6');
// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];
var span6 = document.getElementsByClassName("close")[5];
// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
   
}
btn2.onclick = function() {
    modal2.style.display = "block";
   
}
btn3.onclick = function() {
    modal3.style.display = "block";
   
}
btn4.onclick = function() {
    modal4.style.display = "block";
   
}
btn5.onclick = function() {
    modal5.style.display = "block";
   
}
btn6.onclick = function() {
    modal6.style.display = "block";
   
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
span4.onclick = function() {
    modal4.style.display = "none";
}
span5.onclick = function() {
    modal5.style.display = "none";
}
span6.onclick = function() {
    modal6.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}