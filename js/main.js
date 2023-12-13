const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show'); 
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

function imgSlider(anything){
  document.getElementById('sliderimage').src = anything;
}
let img = document.getElementById("sliderimage");
let ba = document.getElementById("bebidaA");
let bb = document.getElementById("bebidaB");
let bc = document.getElementById("bebidaC");
ba.addEventListener("click", function(){
    img.src = "images/img1.png";
})
bb.addEventListener("click", function(){
    img.src = "images/img2.png";
})
bc.addEventListener("click", function(){
    img.src = "images/img3.png";
}) 

let circle = document.getElementById("circle");
let colora = document.getElementById("bebidaA");
let colorb = document.getElementById("bebidaB");
let colorc = document.getElementById("bebidaC");
colora.addEventListener("click", function(){
    circle.style.background = "#2c4e2c";
})
colorb.addEventListener("click", function(){
  circle.style.background = "#ec7a99";
})
colorc.addEventListener("click", function(){
  circle.style.background = "#aa047a";
})