/*alert('Bienvenidos')*/
var Nombre = "Harold Estiven Triana";
var Edad = "21";
var Datos = document.getElementById("Datos");
Datos.innerHTML=`
<h1>Actividad</h1>
<h2>Mi nombre es: ${Nombre}</h2>
<h2>Mi edad es: ${Edad}</h2>`;
if (Edad > 18){
    Datos.innerHTML += `
    <h1>Ooooh ya eres mayor de edad</h1>`;
    /*if(Edad > 30){
        Datos.innerHTML +=`
        <h1>Eres un anciano</h1>`;
    }z
}
else if(Edad > 30){
    Datosatos.innerHTML +=`
    <h1>Eres un anciano</h1>`;*/
}
    else {
        Datos.innerHTML += `
        <h1>Vaya eres un niño todavia</h1>`;
    }