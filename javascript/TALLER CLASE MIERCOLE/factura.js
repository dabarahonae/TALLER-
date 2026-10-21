document.getElementById("agregar").addEventListener("click", function() {
    agregarFila();
    agregarFila2();
});

function calcularIVA(precio){
    return precio * 0.15;
}
function calcularTotal(precio){
    return precio + calcularIVA(precio);
}
function calcularSubtotal(cantidad, precio) {
    return cantidad * precio;
}

function agregarFila(){
    const filaNueva = document.createElement("tr");
    let producto = document.getElementById("producto").value;
    let cantidad = Number(document.getElementById("cantidad").value);
    let precio = Number(document.getElementById("precio").value);
    let subtotal = calcularSubtotal(cantidad, precio);

    filaNueva.innerHTML = `
        <td>${producto}</td> 
        <td>${cantidad}</td> 
        <td>$${precio}</td> 
        <td>$${subtotal}</td>
    `;

    document.getElementById("detalleFactura").appendChild(filaNueva);
}

function agregarFila2(){
    const filaNueva = document.createElement("tr");
    let cantidad = Number(document.getElementById("cantidad").value);
    let precio = Number(document.getElementById("precio").value);
    let subtotal = calcularSubtotal(cantidad, precio);
    

    let IVA = calcularIVA(subtotal); 
    let total = subtotal + IVA; 

    filaNueva.innerHTML = `
        <td>$${subtotal}</td> 
        <td>$${IVA}</td> 
        <td>$${total}</td> 
    `;


    let contenedor = document.getElementById("totalFactura");
    contenedor.innerHTML = "";
    contenedor.appendChild(filaNueva);
}
  
 