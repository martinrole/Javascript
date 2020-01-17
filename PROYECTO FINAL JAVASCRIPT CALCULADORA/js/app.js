(
  function Calculadora()
  {
      var pantalla = 0;
      var numero1 = 0, numero2 = 0;
      var operador = 0, resultado = 0;

      function control() // Sirve para que no se dañe el primer número que ingresa por el cero
      {
        pantalla = parseFloat(document.getElementById("display").innerHTML);

        if (pantalla === 0)
          {
            return true;
          }
        else
          {
            return false;
          }
      }

      function control2() // Sirve para que la calculadora no reciba mas de 8 digitos en la operacion
      {
        var validador = document.getElementById("display").innerHTML.length;

        if (validador >= 8)
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
        document.getElementById("display").innerHTML = 0;
        resultado = 0, numero1 = 0, numero2 = 0, operador = 0; // Esto se coloca para que vuelva a iniciar las variables en cero en caso de haber hecho una operacion anterior.
      }
      function separador()
      {
        pantalla = parseFloat(document.getElementById("display").innerHTML);
        pantalla = pantalla.toString() + ".";   // El toString sirve para volver un valor en texto y me permite concatenarlo con el nuevo número.
        document.getElementById("display").innerHTML = pantalla; 
      }

      function cero()
      {
        if(control() === true) // Llama a la función control
          {
              document.getElementById("display").innerHTML = 0;
          }
        else if (control2() === true)
          {
            document.getElementById("display").innerHTML = pantalla;
          }
        else
          {
            pantalla = document.getElementById("display").innerHTML;
            pantalla = pantalla.toString() + "0";   // El toString sirve para volver un valor en texto y me permite concatenarlo con el nuevo número.
            document.getElementById("display").innerHTML = pantalla;
          }

      }

      function uno()
      {

        if(control() === true) // Llama a la función control
          {
              document.getElementById("display").innerHTML = 1;
          }
        else if (control2() === true)
          {
            document.getElementById("display").innerHTML = pantalla;
          }
        else
          {
            pantalla = document.getElementById("display").innerHTML;
            pantalla = pantalla.toString() + "1";   // El toString sirve para volver un valor en texto y me permite concatenarlo con el nuevo número.
            document.getElementById("display").innerHTML = pantalla;
          }

      }

      function dos()
      {
        if(control() === true) // Llama a la función control
          {
              document.getElementById("display").innerHTML = 2;
          }
        else if (control2() === true)
        {
          document.getElementById("display").innerHTML = pantalla;
        }
        else
          {
            pantalla = document.getElementById("display").innerHTML;
            pantalla = pantalla.toString() + "2";   // El toString sirve para volver un valor en texto y me permite concatenarlo con el nuevo número.
            document.getElementById("display").innerHTML = pantalla;
          }
      }

      function tres()
      {
        if(control() === true) // Llama a la función control
          {
              document.getElementById("display").innerHTML = 3;
          }
        else if (control2() === true)
        {
          document.getElementById("display").innerHTML = pantalla;
        }
        else
          {
            pantalla = document.getElementById("display").innerHTML;
            pantalla = pantalla.toString() + "3";   // El toString sirve para volver un valor en texto y me permite concatenarlo con el nuevo número.
            document.getElementById("display").innerHTML = pantalla;
          }
      }

      function cuatro()
      {
        if(control() === true) // Llama a la función control
          {
              document.getElementById("display").innerHTML = 4;
          }
        else if (control2() === true)
        {
          document.getElementById("display").innerHTML = pantalla;
        }
        else
          {
            pantalla = document.getElementById("display").innerHTML;
            pantalla = pantalla.toString() + "4";   // El toString sirve para volver un valor en texto y me permite concatenarlo con el nuevo número.
            document.getElementById("display").innerHTML = pantalla;
          }
      }
      function cinco()
      {
        if(control() === true) // Llama a la función control
          {
              document.getElementById("display").innerHTML = 5;
          }
        else if (control2() === true)
        {
          document.getElementById("display").innerHTML = pantalla;
        }
        else
          {
            pantalla = document.getElementById("display").innerHTML;
            pantalla = pantalla.toString() + "5";   // El toString sirve para volver un valor en texto y me permite concatenarlo con el nuevo número.
            document.getElementById("display").innerHTML = pantalla;
          }
      }
      function seis()
      {
        if(control() === true) // Llama a la función control
          {
              document.getElementById("display").innerHTML = 6;
          }
        else if (control2() === true)
        {
          document.getElementById("display").innerHTML = pantalla;
        }
        else
          {
            pantalla = document.getElementById("display").innerHTML;
            pantalla = pantalla.toString() + "6";   // El toString sirve para volver un valor en texto y me permite concatenarlo con el nuevo número.
            document.getElementById("display").innerHTML = pantalla;
          }
      }
      function siete()
      {
        if(control() === true) // Llama a la función control
          {
              document.getElementById("display").innerHTML = 7;
          }
        else if (control2() === true)
        {
          document.getElementById("display").innerHTML = pantalla;
        }
        else
          {
            pantalla = document.getElementById("display").innerHTML;
            pantalla = pantalla.toString() + "7";   // El toString sirve para volver un valor en texto y me permite concatenarlo con el nuevo número.
            document.getElementById("display").innerHTML = pantalla;
          }
      }
      function ocho()
      {
        if(control() === true) // Llama a la función control
          {
              document.getElementById("display").innerHTML = 8;
          }
        else if (control2() === true)
        {
          document.getElementById("display").innerHTML = pantalla;
        }
        else
          {
            pantalla = document.getElementById("display").innerHTML;
            pantalla = pantalla.toString() + "8";   // El toString sirve para volver un valor en texto y me permite concatenarlo con el nuevo número.
            document.getElementById("display").innerHTML = pantalla;
          }
      }
      function nueve()
      {
        if(control() === true) // Llama a la función control
          {
              document.getElementById("display").innerHTML = 9;
          }
        else if (control2() === true)
        {
          document.getElementById("display").innerHTML = pantalla;
        }
        else
          {
            pantalla = document.getElementById("display").innerHTML;
            pantalla = pantalla.toString() + "9";   // El toString sirve para volver un valor en texto y me permite concatenarlo con el nuevo número.
            document.getElementById("display").innerHTML = pantalla;
          }
      }

      function negativo()
      {
        pantalla =  -1 * document.getElementById("display").innerHTML;
        document.getElementById("display").innerHTML = pantalla;
      }
      // -----------------   CAPTURA NUMEROS   ---------------

      function captura_numero1() 
      {
              numero1 = document.getElementById("display").innerHTML;
              document.getElementById("display").innerHTML = 0;
              numero2 = 0;

      }
      function captura_numero2 ()
      {
        if (numero2 === 0)
        {
          numero2 = document.getElementById("display").innerHTML;
          document.getElementById("display").innerHTML = 0;
        }
        else
        {
          numero1 = document.getElementById("display").innerHTML;
        }
      }

        //xxxxxxxxxxxxxxxxxxxxx  OPERADORES MATEMATICOS    xxxxxxxxxxxxxxxxxxxxxxxx

      function suma()
      {
        captura_numero1(); // Esta funcion captura el primer numero cuando selecciona una operacion matematica
        return operador = 1;
      }

      function resta()
      {
        captura_numero1();
        return operador = 2;
      }

      function multiplica()
      {
        captura_numero1();
        return operador = 3;
      }
      function divide()
      {
        captura_numero1();
        return operador = 4;
      }

              //   MUESTRA EL RESULTADO DE LA OPERACION   xxxxxxxx

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
        document.getElementById("display").innerHTML = resultado;
      }


      // ---- LLAMADA A CADA FUNCION CREADA 

      document.getElementById("sign").addEventListener("click", negativo)
      document.getElementById("0").addEventListener("click", cero);
      document.getElementById("1").addEventListener("click", uno);
      document.getElementById("2").addEventListener("click", dos);
      document.getElementById("3").addEventListener("click", tres);
      document.getElementById("4").addEventListener("click", cuatro);
      document.getElementById("5").addEventListener("click", cinco);
      document.getElementById("6").addEventListener("click", seis);
      document.getElementById("7").addEventListener("click", siete);
      document.getElementById("8").addEventListener("click", ocho);
      document.getElementById("9").addEventListener("click", nueve);

      document.getElementById("on").addEventListener("click", limpiar);
      document.getElementById("punto").addEventListener("click", separador);
      document.getElementById("mas").addEventListener("click", suma);
      document.getElementById("menos").addEventListener("click", resta);
      document.getElementById("por").addEventListener("click", multiplica);
      document.getElementById("dividido").addEventListener("click", divide);
      document.getElementById("igual").addEventListener("click", final);

      // -----   EFECTO PRESIONAR TECLA

      var teclado = document.querySelector(".teclado");


      teclado.addEventListener('click',presionaBoton);
      teclado.addEventListener("mouseout", soltarBoton)


      function presionaBoton (botonSeleccionado)
      {
          botonSeleccionado.target.style.padding = "1%";
      }

      function soltarBoton (botonSeleccionado)
      {
          botonSeleccionado.target.style.padding = "0%";
      }

  }()

)

