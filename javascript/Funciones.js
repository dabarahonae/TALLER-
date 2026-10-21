document.getElementById("calcular").addEventListener("click", function(){
    let precio=Number(document.getElementById("precio").value);
    let total=calcularTotal(precio);

    document.getElementById("total").innerHTML="El total a pagar es: "+total
    
});

//---Esta funcion calcular el 15% de IVA
function calcularIVA(precio){
    return precio*0.15;
}
function calcularTotal(precio){
    return precio+calcularIVA(precio);
}