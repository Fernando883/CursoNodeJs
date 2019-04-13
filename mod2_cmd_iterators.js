// obtenemos los parametros
let param1 = process.argv[0];
let param2 = process.argv[1];
let paramArrayResto = process.argv.slice(2,process.argv.length);


// Linea en blanco
console.log();

// ruta del interprete node.js y fichero
console.log(`Route to node.js: ${param1}`);
console.log(`Route to this file: ${param2}`);

let paramArrayRestoFiltrado = paramArrayResto;

paramArrayResto.forEach((elem,index) => {
	if (elem === "-r") {
		// Recogemos valor a eliminar
		let valueDelete = paramArrayResto[index+1];

		if (valueDelete !== undefined) {
			// Eliminamos el valueDelete del paramArrayRestoFiltrado
 			paramArrayRestoFiltrado = paramArrayRestoFiltrado.filter( elemFilter =>	elemFilter !== valueDelete );
		} 
	}
});

// Eliminamos -r
paramArrayRestoFiltrado = paramArrayRestoFiltrado.filter(elem => elem !== "-r");

console.log();

paramArrayRestoFiltrado.sort().reduce((ac, el, i, a) => {
	if (i === 0 || (el === a[i-1] && i < a.length)) {
		ac += 1;
		// Comprobamos si es el ultimo elemento para mostrarlo
		if(i === a.length-1){
			console.log(`${el}:  ${ac}`);
		}

	} else {
		// Mostramos el elemento anterior con el acomulador
		console.log(`${a[i-1]}:  ${ac}`);
		// Reiniciamos el acomulador a 1 ya que tenemos un nuevo elemento
		ac = 1;
	}
	return ac;
},0);