var pantalla = 0;
var numero1 = 0, numero2 = 0;
var operador = 0, resultado = 0;

function control() // Sirve para que no se dañe el primer número que ingresa por el cero
{
  pantalla = parseFloat(document.getElementById("screen").value);

  if (pantalla === 0)
    {
      return true;
    }
  else
    {
      return false;
    }
}

function limpiar()
{
  document.getElementById("screen").value = 0;
  resultado = 0, numero1 = 0, numero2 = 0, operador = 0; // Esto se coloca para que vuelva a iniciar las variables en cero en caso de haber hecho una operacion anterior.
}

function cero()
{
  if(control() === true) // Llama a la función control
    {
        document.getElementById("screen").value = 0;
    }
  else
    {
       pantalla = parseFloat(document.getElementById("screen").value);
       pantalla = pantalla.toString() + "0";   // El toString sirve para volver un valor en texto y me permite concatenarlo con el nuevo número.
       document.getElementById("screen").value = pantalla;
    }

}

function uno()
{
  if(control() === true) // Llama a la función control
    {
        document.getElementById("screen").value = 1;
    }
  else
    {
       pantalla = parseFloat(document.getElementById("screen").value);
       pantalla = pantalla.toString() + "1";   // El toString sirve para volver un valor en texto y me permite concatenarlo con el nuevo número.
       document.getElementById("screen").value = pantalla;
    }

}

function dos()
{
  if(control() === true) // Llama a la función control
    {
        document.getElementById("screen").value = 2;
    }
  else
    {
       pantalla = parseFloat(document.getElementById("screen").value);
       pantalla = pantalla.toString() + "2";   // El toString sirve para volver un valor en texto y me permite concatenarlo con el nuevo número.
       document.getElementById("screen").value = pantalla;
    }

}

function tres()
{
  if(control() === true) // Llama a la función control
    {
        document.getElementById("screen").value = 3;
    }
  else
    {
       pantalla = parseFloat(document.getElementById("screen").value);
       pantalla = pantalla.toString() + "3";   // El toString sirve para volver un valor en texto y me permite concatenarlo con el nuevo número.
       document.getElementById("screen").value = pantalla;
    }
}
// -----------------   CAPTURA NUMEROS   ---------------

function captura_numero() 
{
  numero1 = parseFloat(document.getElementById("screen").value);
  document.getElementById("screen").value = 0;
}

function captura_numero2 ()
{
  if (resultado === 0) // Esto quiere decir que es la primera vez que da clic en igual
  {
    numero2 = parseFloat(document.getElementById("screen").value);
  }
  else // Si no es la primera vez que da click en igual en la operacion, toma el resultado como numero1 y no cambia el numero2.
  {
    numero1 = parseFloat(document.getElementById("screen").value);
  }
}

  //xxxxxxxxxxxxxxxxxxxxx  OPERADORES MATEMATICOS    xxxxxxxxxxxxxxxxxxxxxxxx

function suma()
{
  captura_numero(); // Esta funcion captura el primer numero cuando selecciona una operacion matematica
  return operador = 1;
}

function resta()
{
  captura_numero();
  return operador = 2;
}

function multiplica()
{
  captura_numero();
  return operador = 3;
}
function divide()
{
  captura_numero();
  return operador = 4;
}

// xxxxxxxxxxxxxx  MUESTRA EL RESULTADO DE LA OPERACION   xxxxxxxxxxxxxxxxxxxxxxxxxxxx

function final()
{
  captura_numero2();

  switch(operador)
  {
    case 1: // El numero 1 quiere decir que cuando la variable operador es igual a 1 por la funcion de arriba 1, entra en este caso. Asi con cada caso funciona igual
      resultado = parseFloat(numero1) + parseFloat(numero2);
      break;
    case 2:
      resultado = parseFloat(numero1) - parseFloat(numero2);
      break;
    case 3:
      resultado = parseFloat(numero1) * parseFloat(numero2);
      break;
    case 4:
      resultado = parseFloat(numero1) / parseFloat(numero2);
      break;
  }
  document.getElementById("screen").value = resultado;

}


// ---- LLAMADA A CADA FUNCION CREADA 


document.getElementById("clean").addEventListener("click", limpiar);
document.getElementById("zero").addEventListener("click", cero);
document.getElementById("one").addEventListener("click", uno);
document.getElementById("two").addEventListener("click", dos);
document.getElementById("three").addEventListener("click", tres);
document.getElementById("sumar").addEventListener("click", suma);
document.getElementById("restar").addEventListener("click", resta);
document.getElementById("multiplicar").addEventListener("click", multiplica);
document.getElementById("dividir").addEventListener("click", divide);

document.getElementById("igual").addEventListener("click", final);
