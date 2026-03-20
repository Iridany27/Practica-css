function calcular() {
    let horas = parseFloat(document.getElementById("horas").value) || 0;
    let costo = parseFloat(document.getElementById("costo").value) || 0;
    let horasNormales = parseFloat(document.getElementById("horasNormales").value) || 0;
    let horasExtras = parseFloat(document.getElementById("horasExtras").value) || 0;

    let subtotal = (horasNormales * costo) + (horasExtras * costo * 2);
    let ispt = subtotal * 0.10;
    let monto = subtotal - ispt;

    document.getElementById("subtotal").value = subtotal.toFixed(2);
    document.getElementById("ispt").value = ispt.toFixed(2);
    document.getElementById("monto").value = monto.toFixed(2);
}

function limpiar() {
    document.querySelectorAll("#nomina-section input").forEach(input => input.value = "");
}