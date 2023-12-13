# STARTBUCKS FRONTEND
### Cristian Leonardo Reyes Moreno

Este proyecto representa la implementación del frontend de la página de Starbucks utilizando HTML, CSS y JavaScript. La estructura del proyecto se divide en tres archivos principales: index.html, style.css, y main.js. A continuación, se proporciona una descripción general del código y su funcionalidad.

### Estructura de Archivos
#### index.html
Este archivo contiene la estructura HTML de la página de Starbucks. Incluye la barra de navegación, el contenido principal, y se vincula con las hojas de estilo CSS y el script JavaScript.

#### style.css
Este archivo define los estilos y la apariencia visual de la página. Se utiliza para establecer la disposición de la barra de navegación, el diseño del contenido principal, y los estilos específicos para dispositivos de diferentes tamaños (@media).

#### main.js
Este archivo JavaScript proporciona la funcionalidad interactiva a la página. Se encarga de manejar la apertura y cierre de un menú emergente, así como de cambiar dinámicamente la imagen principal y el color de fondo del círculo en respuesta a eventos del usuario. 

**JS**
```js
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

```
## Título 2

* Lista 1
* Lista 2
* Lista 3

**Texto en negrita**

*Texto en cursiva*
