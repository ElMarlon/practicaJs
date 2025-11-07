//ejercicio 1
let nombre, edad, carrera;
nombre = "Marlon";
edad = 22;
carrera = "desarrollo";

const divResultado = document.getElementById("resultado");

divResultado.innerHTML = `Hola soy <strong>${nombre} </strong> tengo ${edad} years <br>  Soy estudiante 
de ${carrera} y estaremos haciendo ejercicios para dominar Js <br> Desde nivel basico
hasta hacer un proyecto funcional para un negocio`;

//-------------------Ejercicio 2

const mensaje2 = document.getElementById("mensaje2");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const botonSuma = document.getElementById("sumarBtn");
const botonResta = document.getElementById("restarBtn");
const botonMult = document.getElementById("multiplicarBtn");
const resultado2 = document.getElementById("resultado2");
mensaje2.innerHTML = `Crear 2 inputs de tipo numerico y un boton sumar restar 
multiplicar <br> donde tendremos que practicar condicionales, <br>
 evento de escucha y convertir el numero que nos ingresan en numerico por seguridad <br><br>`;

function mat(a, b, accion) {
  if (accion === "sumarBtn") {
    return a + b;
  } else if (accion === "restarBtn") {
    return a - b;
  } else {
    return a * b;
  }
}

botonSuma.addEventListener("click", function () {
  resultado2.innerHTML =
    "Su resultado de la suma es: " +
    mat(Number(num1.value), Number(num2.value), "sumarBtn");
});

botonResta.addEventListener("click", function () {
  resultado2.innerHTML =
    "Su resultado en resta es: " +
    mat(Number(num1.value), Number(num2.value), "restarBtn");
});

botonMult.addEventListener("click", function () {
  resultado2.innerHTML =
    "La multiplicacion es: " +
    mat(Number(num1.value), Number(num2.value), "multiplicarBtn");
});
//----------------------------------------------Ejercicio 3

const mensaje3 = document.getElementById("mensaje3");
mensaje3.innerHTML = `Crea un input y un boton agregar y eliminar, <br>
Cada vez que presionas el botón, agrega el valor a una lista y lo mismo con el boton eliminar <br> <br>`;
const inputList = document.getElementById("inputlista");
const botonAgregar = document.getElementById("agregarBtn");
const botonDelete = document.getElementById("eliminarBtn");
const lista = document.getElementById("lista");

botonAgregar.addEventListener("click", () => {});
