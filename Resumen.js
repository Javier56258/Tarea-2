//Variables y tipos de datos
var nombre = "Javier";
let apellido = "Santander";
const edad = 21;

console.log(nombre);
console.log(apellido);
console.log(edad);

const saludo = "Hola";
const saludo1 = 'Hola';
const frase = `${saludo}, como estan?`;

console.log(saludo);
console.log(saludo1);
console.log(frase);

const verdadero = true;
const falso = false;

console.log(verdadero);
console.log(falso);

const age = null;
console.log(age);

//Operadores aritmeticos
const num1 = 20;
const num2 = 40;

//suma
console.log(num1 + num2); 

//resta
console.log(num1 - num2); 

//multiplicacion
console.log(num1 * num2); 

//division
console.log(num1 / num2); 

//modulo
console.log(num1 % num2); 

//Operadores de asignación y comparación
const numero1 = 15;
const numero2 = 20;
const numero3 = '25';

if (numero1 > numero2) {
    console.log(`${numero1} es mayor que ${numero2}. Este último siendo el menor` );
} else if(numero1 < numero2){
    console.log(`${numero2} es mayor que ${numero1}. Este último siendo el menor` );
} else {
    console.log(`${numero1} es igual que ${numero2}` );
}

if (numero1 > numero3) {
    console.log(`${numero1} es mayor que ${numero3}. Este último siendo el menor` );
} else if(numero1 < numero3){
    console.log(`${numero3} es mayor que ${numero1}. Este último siendo el menor` );
} else {
    console.log(`${numero1} es igual que ${numero3}` );
}

if (numero3 > numero2) {
    console.log(`${numero3} es mayor que ${numero2}. Este último siendo el menor` );
} else if(numero3 < numero2){
    console.log(`${numero2} es mayor que ${numero3}. Este último siendo el menor` );
} else {
    console.log(`${numero3} es igual que ${numero2}` );
}

if (numero1 != numero3) {
    console.log(`${numero1} es estrictamente diferente de ${numero3}` );
} else{
    console.log(`${numero1} es estrictamente igual a ${numero3}` );
}
if(numero1 != numero2){
    console.log(`${numero1} es estrictamente diferente de ${numero2}` );
} else{
    console.log(`${numero2} es estrictamente igual a ${numero1}` );
}

//Condicionales
const n1 = 10;
const n2 = 20;
const n3 = 30;

//1. Imprimir en consola el número mayor de los tres.
if (n1 > n2 && n1 > n3){
    console.log(`${n1} es el mayor`);
} else if (n2 > n1 && n2 > n3){
    console.log(`${n2} es el mayor`);
} else {
    console.log(`${n3} es el mayor`);
}
//2. Imprimir en consola el número menor de los tres.
if (n1 < n2 && n1 < n3){
    console.log(`${n1} es el menor`);
} else if (n2 < n1 && n2 < n3){
    console.log(`${n2} es el menor`);
} else {
    console.log(`${n3} es el menor`);
}
//3. Imprimir en consola si el numero1 es par o impar.
if (n1%2 == 0){
    console.log(`${n1} es par`);
} else{
    console.log(`${n1} es impar`);
}
//4. Imprimir en consola si el numero2 es par o impar.
if (n2%2 == 0){
    console.log(`${n2} es par`);
} else{
    console.log(`${n2} es impar`);
}
//5. Imprimir en consola si el numero3 es par o impar.
if (n3%2 == 0){
    console.log(`${n3} es par`);
} else{
    console.log(`${n3} es impar`);
}
//6. Imprimir en consola si el numero1 es múltiplo de 5.
if(n1%5 == 0){
    console.log(`${n1} es multiplo de 5`);
} else{
    console.log(`${n1} no es multiplo de 5`);
}
//7. Imprimir en consola si el numero2 es múltiplo de 5.
if(n2%5 == 0){
    console.log(`${n2} es multiplo de 5`);
} else{
    console.log(`${n2} no es multiplo de 5`);
}
//8. Imprimir en consola si el numero3 es múltiplo de 5.
if(n3%5 == 0){
    console.log(`${n3} es multiplo de 5`);
} else{
    console.log(`${n3} no es multiplo de 5`);
}

//Ciclos
//1. Imprimir en consola los números del 1 al 10.
for (let i = 1; i < 11; i++) {
    console.log(i);
}
console.log(" ");
//2. Imprimir en consola los números del 10 al 1.
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log(" ");
//3. Imprimir en consola los números del 1 al 10 pero solo los pares.
for (let i = 1; i < 11; i++) {
    if(i%2==0){
        console.log(i);
    }
}
console.log(" ");
//4. Imprimir en consola los números del 1 al 10 pero solo los impares.
for (let i = 1; i < 11; i++) {
    if(i%2!=0){
        console.log(i);
    }
}
console.log(" ");
//5. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.
for (let i = 1; i < 11; i++) {
    if(i%3==0){
        console.log(i);
    }
}
console.log(" ");
//6. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.
for (let i = 1; i < 11; i++) {
    if(i%5==0){
        console.log(i);
    }
}
console.log(" ");
//7. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.
for (let i = 1; i < 11; i++) {
    if(i%3==0 && i%5==0){
        console.log(i);
    }
}
console.log(" ");
//8. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.
for (let i = 1; i < 11; i++) {
    if(i%3==0 || i%5==0){
        console.log(i);
    }
}

//Funciones
//1. Crea una función que reciba un string y retorne el string en mayúsculas.
function CMayusculas(texto) {
    return texto.toUpperCase();
}
console.log(CMayusculas("hola mundo")); 
//2. Crea una función que reciba un string y retorne el string en minúsculas.
function CMinusculas(texto) {
    return texto.toLowerCase();
}
console.log(CMinusculas("HOLA MUNDO")); 
//3. Crear una función que reciba como parámetro 2 números y los reste.
function SUMAR(nu1, nu2) {
    return nu1+nu2;
}
console.log(SUMAR(2,2)); 
//4. Crear una función que reciba como parámetro 2 números y los divida.
function DIVIDIR(nu1, nu2) {
    return nu1/nu2;
}
console.log(DIVIDIR(2,2)); 
//5. Crear una función que reciba como parámetro 2 números y los multiplique.
function MULTIPLICAR(nu1, nu2) {
    return nu1*nu2;
}
console.log(MULTIPLICAR(2,2)); 
//6. Crear una función que reciba un string y devuelva la longitud del string.
function LargoFrase(texto){
    return texto.length;
}
console.log(LargoFrase("HOLA MUNDO")); 

//ARRAYS
//1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
const numeros = [1, 2, 3, 4, 5]
function sumatoria(array){
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}
console.log(sumatoria(numeros)) 

//2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
function promedio(array){
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma/array.length;
}
console.log(promedio(numeros)) 
//3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
const frases = ["juanito", "pan", "palta"];
function AMayuscula(array){
    return array.map(function(str) {
        return str.toUpperCase();
    });
}
console.log(AMayuscula(frases)) 
//4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
function paresArreglo(array){
    return array.filter(function(numero) {
        return numero % 2 == 0;
    });
}
console.log(paresArreglo(numeros)) 

//Objetos
const persona = {
    nombre: "Juan Perez",
    edad: 31,
    genero: "masculino"
}

console.log(persona); 
console.log(persona.nombre); 
console.log(persona.edad); 
console.log(persona.genero); 

const caja = {
    cuadernos: 5, 
    lapices: 10, 
    papel: 50, 
    fotografias: 3, 
    buenEstado: true 
}

console.log(caja); 
console.log(caja.cuadernos); 
console.log(caja.lapices); 
console.log(caja.papel);
console.log(caja.fotografias);
console.log(caja.buenEstado);
for (let propiedad in caja) {
    console.log(`${propiedad}, dato: ${typeof caja[propiedad]}`);
}