//alert("Hola ciclos")

let num=Number(prompt("Ingresa el num de inicio: "))
let num2=Number(prompt("Ingresa el numero fin:"))

const resul=document.getElementById("resultado");
resul.innerHTML="";

const cuerpo=document.getElementById("cuerpo");


while (num<num2){
    
for(i>=num; i<=10; i++){ 
//resul.innerHTML +="<br>";
//resul.innerHTML+=num+" * "+i+" = "+(num*i)+" <br> ";
cuerpo.innerHTML+=("<tr>"+"<td>"+num+"</td>"+"<td>"+i+"</td>"+"<td>"+(num*i)+"</td"+"</tr>");
}
num++
}

//capturando valores de los inputs
document.getElementById("btnSumar").addEventListener("click", function(){
    let num1= parseInt(document.getElementById("num1").value);
    let num2= parseInt(document.getElementById("num2").value);

    let suma= num1+num2;

    document.getElementById("resultadoSuma").innerHTML="la suma es: "+suma;
});