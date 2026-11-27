var Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
};

Bicicleta.prototype.toString = function () {
    return 'id: ' + this.id + ' | color: ' + this.color;
};

Bicicleta.allBicis = [];
Bicicleta.add = function (aBici) {
    Bicicleta.allBicis.push(aBici);
};


/**
 * READ (Leer/Buscar): Busca una bicicleta específica por su ID.
 * - .find(): Recorre el arreglo y devuelve el primer elemento que cumpla la condición.
 * - Se usa '==' (comparación flexible) porque el ID que llega desde un formulario HTML
 *   viene como texto ('1') y el guardado puede ser número (1).
 * @param {number|string} aBiciId - ID de la bicicleta a buscar.
 * @returns {Bicicleta} La bicicleta encontrada.
 * @throws {Error} Lanza una excepción si no existe ninguna bicicleta con ese ID.
 */

Bicicleta.findById = function (aBiciId) {
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
    if (aBici)
        return aBici;
    else
        throw new Error(`No existe una bicicleta con el id ${aBiciId}`);
};


Bicicleta.removeById = function (aBiciId) {
    Bicicleta.findById(aBiciId);
    for (var i = 0; i < Bicicleta.allBicis.length; i++) {
        if (Bicicleta.allBicis[i].id == aBiciId) {
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
};
/**
 * DELETE (Eliminar): Elimina una bicicleta del arreglo según su ID.
 * 1. Primero llama a Bicicleta.findById(aBiciId) para validar que exista (si no, detiene todo con Error).
 * 2. Recorre el arreglo con un ciclo 'for' hasta encontrar la posición (índice 'i').
 * 3. Usa .splice(i, 1) para borrar exactamente 1 elemento en la posición 'i'.
 * 4. Usa 'break' para salir del ciclo inmediatamente y no seguir recorriendo innecesariamente.
 * @param {number|string} aBiciId - ID de la bicicleta a eliminar.
 */

/*
var a = new Bicicleta(1, 'rojo', 'urbana', [14.0992, -87.2041]);
var b = new Bicicleta(2, 'blanca', 'urbana', [14.0825, -87.1835]);
var c = new Bicicleta(3, 'azul', 'montanesa', [14.0825, -87.1835]);
//constructor para agregar bicicletas

Bicicleta.add(a);
Bicicleta.add(b);
Bicicleta.add(c);
**/

module.exports = Bicicleta;