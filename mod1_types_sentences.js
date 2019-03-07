// Linea en blanco
console.log();

let hour = new Date().getHours();
let saludo;

// Linea con saludo
if (hour >= 7 && hour <= 12) {
	saludo = "Buenos días";
} else if (hour > 13 && hour <= 22) {
	saludo = "Buenas tardes";
} else if ((hour > 22 && hour <= 23)
	|| (hour >= 0 && hour <= 6)) {
	saludo = "Buenas noches";
}

console.log(saludo + ", it's " + hour + " o'clock");

// Linea en blanco
console.log();

let pi = Math.PI.toFixed(6);

// Linea con Number PI with 6 decimals
console.log("Number PI with 6 decimals: " + pi);

// Linea en blanco
console.log();

// funcion que devuelve plantilla con los numero dec, hex, oct, bin
const tablaNumber = (number) => {
	let numberHex = number.toString(16);
	let numberOct = number.toString(8);
	let numberBin = number.toString(2);

	return `${number} dec = ${numberHex} hex = ${numberOct} oct = ${numberBin} bin`;
}

// Tabla con numeros enteros de 0 a 22
for (let i = 0; i <=22; i++) {
	console.log(tablaNumber(i));
} 

// Linea en blanco
console.log();

// Tabla con numeros enteros de 1 a 21 numeros impares
for (let i = 1; i <=22; i++) {
	// Comprobamos que el numero es impar
	if (i%2!==0 && 
		(i < 10 || i > 20)) {
	console.log(tablaNumber(i));
	}
} 

// Linea en blanco
console.log();

// Linea codificacion unicode
console.log("Hi in Chinese is written as: \u55e8\uff0c\u4f60\u597d\u5417");

// Linea en blanco
console.log();

// Fin de programa
console.log("The program has finished");



