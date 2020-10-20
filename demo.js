const empleado = {
    bruto: 50000,
    hijos: 2,
    pagas: 14
};

let retencion;

if(empleado.bruto <= 12000){
    retencion = empleado.bruto * 0;
}else if(empleado.bruto <= 24000){
    retencion = empleado.bruto * 0.08;
}else if (empleado.bruto <= 34000){
    retencion = empleado.bruto * 0.16;
}else if(empleado.bruto > 34000){
    retencion = empleado.bruto * 0.3;
}
console.log(retencion);

let sueldoNeto;
sueldoNeto = empleado.bruto - retencion;

console.log(sueldoNeto);

let retencionHijos
if(empleado.hijos >= 1){
    retencionHijos = empleado.bruto * 0.02;
} else {
    retencionHijos = 0;
}

sueldoNeto = empleado.bruto-(retencion - retencionHijos);
console.log(sueldoNeto);

