var teclado = document.querySelector(".teclado");


teclado.addEventListener('mousedown',presionaBoton);
teclado.addEventListener("mouseup", soltarBoton)


function presionaBoton (botonSeleccionado)
{
    botonSeleccionado.preventDefault;
    console.log(botonSeleccionado.target.getAttribute("id"));
    botonSeleccionado.target.style.padding = "1%";
}

function soltarBoton (botonSeleccionado)
{
    console.log(botonSeleccionado.target.id);
    botonSeleccionado.target.style.padding = "0%";
}