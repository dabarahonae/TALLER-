document.getElementById("btnCalcular").addEventListener("click", function(){
    let peso= parseInt(document.getElementById("peso").value);
    let estatura= parseFloat(document.getElementById("estatura").value);

    let IMC= parseFloat(peso/(estatura)**2);

    document.getElementById("resultadoIMC").innerHTML="Su IMC es: "+IMC;
});

if(IMC<18.5){
    document.getElementById("resultadoIMC").innerHTML="Su IMC es: de bajo peso";
}
if(IMC>=18.5 && IMC<=24.9){
    document.getElementById("resultadoIMC").innerHTML="Su IMC es: Normal";
}
if(IMC>=25 && IMC<=29.9){
    document.getElementById("resultadoIMC").innerHTML="Su IMC es: Sobrepeso";
}
if(IMC>=30 && IMC<=34.9){
    document.getElementById("resultadoIMC").innerHTML="Su IMC es: Obesidad 1";
}
if(IMC>=35 && IMC<=39.9){
    document.getElementById("resultadoIMC").innerHTML="Su IMC es: Obesidad 2";
}
if(IMC>=40){
    document.getElementById("resultadoIMC").innerHTML="Su IMC es: Obesidad 3";
}