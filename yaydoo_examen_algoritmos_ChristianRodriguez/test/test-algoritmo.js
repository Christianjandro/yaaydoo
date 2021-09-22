'use strict';

const chai = require('chai');
const expect = chai.expect;
const {puntosComparacion,palabraRepetida} = require('../index')

describe('1.    Un revisor califica dos desafíos, otorgando puntos en una escala del 1 al 100 para tres categorías: claridad del problema , originalidad y dificultad', function () {

    it('verifies successful response', () => {
        let a = [17, 28, 30];
        let b = [99, 16, 8];
        let result = puntosComparacion(a,b);
        let compara = [2, 1];
        expect(result).to.eql(compara);

    });
});

describe('2.	Dada una cadena de texto (string), obtener el número de veces que se repite cada palabra del texto. El texto puede tener puntos y comas, puede tener palabras en mayúsculas o minúsculas. Devolver resultado en JSON', function () {

    it('verifies successful response', () => {
        let cadena = "Érase una vez una niñita que lucía una hermosa capa de color rojo. Como la niña la usaba muy a menudo, todos la llamaban Caperucita Roja. Un día, la mamá de Caperucita Roja la llamó y le dijo: —Abuelita no se siente muy bien, he horneado unas galletitas y quiero que tú se las lleves. —Claro que sí —respondió Caperucita Roja, poniéndose su capa y llenando su canasta de galletas recién horneadas. Antes de salir, su mamá le dijo: — Escúchame muy bien, quédate en el camino y nunca hables con extraños. —Yo sé mamá —respondió Caperucita Roja y salió inmediatamente hacia la casa de la abuelita.";
        let result = palabraRepetida(cadena);
        var jsonString = JSON.stringify(result);
        expect(jsonString).to.be.a('string');

    });
});
