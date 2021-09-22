
const puntosComparacion  = (a,b) => {
    let result = [];
    let pointA = 0;
    let pointB = 0;

    let valNumer = (val) => {
        if (typeof(val) === 'number') {
          return val > 100 ? 100 : val < 1 ? 0 : val;
        }else{
          return 0;
        }
    }

    if(isArray(a) && isArray(b)){
        let valA = a.filter(valNumer);
        let valB = b.filter(valNumer);

        for (let i = 0; i < 3; i++) {
           if(valA[i] > valB[i]){
            pointA++;
           }
           else if(valA[i] < valB[i]){
            pointB++;
           }
        }
        result = [pointA,pointB];

    }else{
        result = [0,0];
    }
    return result;
}


const palabraRepetida  = (cadena) => {
    let palabras = cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\W/g," ").replace(/  /g," ").replace(/  /g," ").split(' ');
    let result ={};
    palabras.forEach((elemento) => {
        if(elemento !=""){
            let minuscula = elemento.toLowerCase();
            let repeticion = result[minuscula] ? result[minuscula] + 1 : 1;
            result[minuscula] = repeticion;
        }
    });
    return result;
}

function isArray (ar) {
    return ar instanceof Array
        || Array.isArray(ar)
        || (ar && ar !== Object.prototype && isArray(ar.__proto__));
}

module.exports = {puntosComparacion,palabraRepetida};