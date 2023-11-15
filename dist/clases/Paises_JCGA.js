export class Paises {
    constructor() {
        this.getDatos = (url) => {
            return new Promise(function (resolve, reject) {
                fetch(url).then(response => {
                    if (response.status !== 200)
                        reject("se ha producido un error " + response.statusText);
                    response.json().then(datos => resolve(datos));
                    // esta sentencia es absolutamente estandar
                    //    fetch es el metodo estandar de JS para hacer peticiones
                    // Hago la petición; cuando recibo la respuesta,  ejecuto la respuesta y extraigo el json y se los paso a la funcion resolve
                    // resolve hace un return de los datos
                });
                // si queremos que haga algo, despues del cierre del parentesis del them, meteriamos lo que queremos que haga p.ej.: .catch(error) si el fetch devuelve un error
            });
            // Codigo de Javier..., pero hace lo mismo
            // export class Paises {
        };
    }
}
