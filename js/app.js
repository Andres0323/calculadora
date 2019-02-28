//Variables para operaciones
var operandoa;
var operandob;
var operandoc;
var operacion;
var decimal = 0;

//Funcion que inicializa la logica
function init(){
  //variables de la aplicacion
  var pantalla = document.getElementById('display');
  var clear = document.getElementById('on');
  var masMenos = document.getElementById('sign');
  var suma = document.getElementById('mas');
  var division = document.getElementById('dividido');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');
  var multiplicacion = document.getElementById('por');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var resta = document.getElementById('menos');
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cero = document.getElementById('0');
  var punto = document.getElementById('punto');
  var igual = document.getElementById('igual');

  //Eventos de la aplicacion
  uno.onclick = function(e){
    if (pantalla.textContent === "0") {
        pantalla.textContent = " ";
    }
    if (pantalla.textContent.length >= 8 ) {

    }
     else {
      pantalla.textContent = pantalla.textContent + "1";
    }
  }

  dos.onclick = function(e){
    if (pantalla.textContent === "0") {
        pantalla.textContent = "";
    }
    if (pantalla.textContent.length >= 8 ) {

    }
    else {
      pantalla.textContent = pantalla.textContent + "2";
    }
  }

  tres.onclick = function(e){
    if (pantalla.textContent === "0") {
        pantalla.textContent = "";
    }
    if (pantalla.textContent.length >= 8 ) {

    }
    else {
      pantalla.textContent = pantalla.textContent + "3";
    }
  }

  cuatro.onclick = function(e){
    if (pantalla.textContent === "0") {
        pantalla.textContent = "";
    }
    if (pantalla.textContent.length >= 8 ) {

    }
    else {
      pantalla.textContent = pantalla.textContent + "4";
    }
  }

  cinco.onclick = function(e){
    if (pantalla.textContent === "0") {
        pantalla.textContent = "";
    }
    if (pantalla.textContent.length >= 8 ) {

    }
    else {
      pantalla.textContent = pantalla.textContent + "5";
    }
  }

  seis.onclick = function(e){
    if (pantalla.textContent === "0") {
        pantalla.textContent = "";
    }
    if (pantalla.textContent.length >= 8 ) {

    }
    else {
      pantalla.textContent = pantalla.textContent + "6";
    }
  }

  siete.onclick = function(e){
    if (pantalla.textContent === "0") {
        pantalla.textContent = "";
    }
    if (pantalla.textContent.length >= 8 ) {

    }
    else {
      pantalla.textContent = pantalla.textContent + "7";
    }
  }

  ocho.onclick = function(e){
    if (pantalla.textContent === "0") {
        pantalla.textContent = "";
    }
    if (pantalla.textContent.length >= 8 ) {

    }
    else {
      pantalla.textContent = pantalla.textContent + "8";
    }
  }

  nueve.onclick = function(e){
    if (pantalla.textContent === "0") {
        pantalla.textContent = "";
    }
    if (pantalla.textContent.length >= 8 ) {

    }
    else {
      pantalla.textContent = pantalla.textContent + "9";
    }
  }

  cero.onclick = function(e){

    if (pantalla.textContent === "0") {
        pantalla.textContent = "";
    }
    if (pantalla.textContent.length >= 8 ) {

    }
    else {
      pantalla.textContent = pantalla.textContent + "0";
    }
  }

//Pone la pantalla en cero
  clear.onclick = function(e){
    pantalla.textContent = "0";
  }

//Añade el punto y verifica que no se repita
  punto.onclick = function(e){
    operandoa = pantalla.textContent;
    if ((operandoa) && (decimal == 0)) {
        pantalla.textContent = operandoa + ".";
        decimal = 1;
    } else {
      operandoa;
    }
  }

//Operaciones

masMenos.onclick = function(e){
    operandoa = pantalla.textContent;
    if (operandoa != 0) {
        pantalla.textContent = '-' + operandoa;
    }
}

  suma.onclick = function(e){
     operandoa = pantalla.textContent;
     operacion = "+";
     limpiar();
 }

 resta.onclick = function(e){
     operandoa = pantalla.textContent;
     operacion = "-";
     limpiar();
 }

 multiplicacion.onclick = function(e){
     operandoa = pantalla.textContent;
     operacion = "*";
     limpiar();
 }

 division.onclick = function(e){
     operandoa = pantalla.textContent;
     operacion = "/";
     limpiar();
 }

  igual.onclick = function(e){
      operandob = pantalla.textContent;
      resolver();
  }

//Funcion para limpiar pantalla al tocar signo
  function limpiar(){
    pantalla.textContent = "";
  }
  function reset(){
    pantalla.textContent = ""; //Se llama desde el clear para limpiar variables
    operandoa = 0;
    operandob = 0;
    operacion = 0;
    decimal = 0;
  }

  function resolver(){
  var resp = 0;
  switch(operacion){
    case "+":
      resp = parseFloat(operandoa) + parseFloat(operandob);
      resp = resp.toString();
      if (resp.length >= 8) {
        resp = parseFloat(resp);
        res = resp.toExponential(2);
      } else {
        res = resp;
      }
      break;
    case "-":
        resp = parseFloat(operandoa) - parseFloat(operandob);
        resp = resp.toString();
        if (resp.length >= 8) {
          resp = parseFloat(resp);
          res = resp.toExponential(2);
        } else {
          res = resp;
        }
        break;
    case "*":
      resp = parseFloat(operandoa) * parseFloat(operandob);
      resp = resp.toString();
      if (resp.length >= 8) {
        resp = parseFloat(resp);
        res = resp.toExponential(2);
      } else {
        res = resp;
      }
      break;
    case "/":
      resp = parseFloat(operandoa) / parseFloat(operandob);
      resp = resp.toString();
      if (resp.length >= 8) {
        resp = parseFloat(resp);
        res = resp.toExponential(2);
      } else {
        res = resp;
      }
      break;
  }
  reset();
  pantalla.textContent = res;
}















}
