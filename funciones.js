function interactuarCadenas(cadena1, cadena2) {
  // Tu código aquí
  let respuesta = "";
  if (cadena1.length === cadena2.length) {
    for (let i = 0; i < cadena1.length; i++) {
      if (cadena1[i] === "+") {
        if (cadena2[i] === "+") {
          respuesta += "+";
        } else {
          respuesta += "0";
        }
      } else {
        if (cadena2[i] === "+") {
          respuesta += "0";
        } else {
          respuesta += "-";
        }
      }      
    }    
  }
  return respuesta;
}

function generarApodo(nombre) {
  // Tu código aquí
  let letra3 = "";
  if (nombre.length < 4) {
    throw new Error("Nombre muy corto");      
  }else {
    letra3=nombre[2].toLowerCase();
    if (letra3 !="a" && letra3 !="e" && letra3 !="i" && letra3 !="o" && letra3 !="u") {
      return nombre.substring(0, 3);
    }else {
      return nombre.substring(0, 4);
    }    
  }  
}

function obtenerMarcador(texto) {
  // Tu código aquí
  let primerNumero;
  let segundoNumero;
  let resultado = [0,0];
  // Dividir el texto en un array de palabras usando un espacio como delimitador
  let palabras = texto.trim().split(/\s+/);
  // Obtener las dos últimas palabras del array
  let ultimasDosPalabras = palabras.slice(-2);
  primerNumero = obtenerNumero(ultimasDosPalabras[0]);
  segundoNumero = obtenerNumero(ultimasDosPalabras[1]);
  if (primerNumero >= 0 && segundoNumero >= 0) {
    resultado[0] = primerNumero;
    resultado[1] = segundoNumero;
    return resultado;
  }
  return resultado;
}

function obtenerNumero(texto) {
  let numero = -1;
  switch (texto) {
    case "cero":
      numero = 0;
      break;
    case "uno":
      numero = 1;
      break;
    case "dos":
      numero = 2;
      break;
    case "tres":
      numero = 3;
      break;
    case "cuatro":
      numero = 4;
      break;
    case "cinco":
      numero = 5;
      break;
    case "seis":
      numero = 6;
      break;
    case "siete":
      numero = 7;
      break;
    case "ocho":
      numero = 8;
      break;
    case "nueve":
      numero = 9;
      break;
    default:
      break;
  }
  return numero;
}

class Barco {
  // Tu código aquí
  constructor(calado, tripulacion){
    this.calado = calado;
    this.tripulacion = tripulacion;    
  }

  valeLaPena(){    
    let respuesta = false;
    if (this.calado - (this.tripulacion*1.5) > 20) {
      return true;
    } else
      return false;
  }
}
