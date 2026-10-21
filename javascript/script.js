let nombre="Dylan";
let edad= 20;

console.log("Hola soy: "+nombre+" mi edad es: " +edad+" este es mi primer taller de JS")

//console.log(`Hola soy ${nombre} mi edad es: ${edad} y estoy aprendiendo JS`)

//suma tres num

let num1=Number(prompt("Ingresa numero 1"));
let num2=Number(prompt("Ingresa numero 2"));
let num3= Number(prompt("Ingresa numero 3"));
var suma=num1+num2+num3;
console.log ("La suma es: "+suma)

//capturando el control h por id
const result=document.getElementById("resultado")

result.textContent="La suma es: "+suma;

