"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paises = void 0;
var Paises = /** @class */ (function () {
    function Paises() {
        // return new Promise(function (resolve, reject) {
        //    fetch(url)/*cuando se recibe la respuesta*/.then(response => {
        //        response.json()/*cojo el json de la respuesta*/.then(/*extraigo los datos y se los paso a la funcion*/datos => resolve(datos))
        //    })
        this.getDatos = function (url) {
            return new Promise(function (resolve, reject) {
                fetch(url).then(function (response) {
                    if (response.status !== 200) //si código de respuesta es incorrecto mandar mens de error
                        reject("se ha producido un error " + response.statusText);
                    response.json().then(function (datos) { return resolve(datos); }); //si ok: utiliza el metodo json de response y vuelca los datos
                });
            });
        };
    }
    return Paises;
}());
exports.Paises = Paises;
