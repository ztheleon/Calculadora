// Code goes here

window.numero=0; //save the number typed.
window.total=0; //save the result of operation.
window.centinela=0; //indicate if the number typed is the firts one.
window.operacion=0; //indicate the operation to make.

window.onload = function () { //

  /*En la var "buttons" se almacena la referencia
    de los botones con classname ".buttons"*/
  var buttons = document.querySelector(".buttons");

  buttons.addEventListener("click", function(e) {
  var button = e.target.value; //identified the button pushed.

    switch(button) {
      case "+":             //if the button pushed is +.
        operaciones(numero,operacion);
        operacion="+";
        numero=0;
      break;

      case "-":             //if the button pushed is -.
        operaciones(numero,operacion);
        operacion="-";
        numero=0;
      break;

      case "*":             //if the button pushed is *.
        operaciones(numero,operacion);
        operacion="*";
        numero=0;
      break;

      case "/":             //if the button pushed is /.
        operaciones(numero,operacion);
        operacion="/";
        numero=0;
      break;

      case "=":             //if the button pushed is =.
         operaciones(numero,operacion);
         operacion=0;
      break;

      case "b":            //if the button pushed is del.
         total=0;
         operacion=0;
         numero=0;
         centinela=0;
        //document.getElementById("result").value=total;
         document.getElementsByClassName("calculator-screen").value=total;
      break;

      default:
        /*transform the digits pushed in a number*/
        if(numero===0){ //go into if it´s the firts digit.
          //document.getElementById("result").value=button;
          document.getElementsByClassName("calculator-screen").value=total;
          numero = button; //the number begins with the firts digit.
        }
        else {//Go into after to push the firts digit.
          //document.getElementById("result").value+=button;
             document.getElementsByClassName("calculator-screen").value=total;
          numero += button;//concatenate digits into the variable "numero"
        }                  // 5+8+5 = 585

    }


    function operaciones (a,b){

      if(operacion=="+"){//Apply the sum operation.
        total=total+parseInt(numero);
        document.getElementsByClassName("calculator-screen").value=total;
      }
      else if(operacion=="-"){//Apply the subtract operation.
        total=total-parseInt(numero);
        document.getElementsByClassName("calculator-screen").value=total;
        }
        else if(operacion=="*"){//Apply the multiplication operation.
          total=total*parseInt(numero);
          document.getElementsByClassName("calculator-screen").value=total;
        }
        else if(operacion=="/"){//Apply the division operation.
          total=total/parseInt(numero);
          document.getElementsByClassName("calculator-screen").value=total;
        }

          if(centinela === 0) {//go into if it´s the firts digit.
            total=parseInt(numero);//start the total value with the firts number.
            centinela=1; //it´s not the firt digit.
          }

    }


  }); //end to addeventlistener

};  // end to windows.load
