export class Paises {
    constructor() {
        this.getDatos = (url) => {
            return new Promise(function (resolve, reject) {
                fetch(url) /*cuando se recibe la respuesta*/.then(response => {
                    response.json() /*cojo el json de la respuesta*/.then(/*extraigo los datos y se los paso a la funcion*/ /*extraigo los datos y se los paso a la funcion*/ datos => resolve(datos));
                });
            });
        };
    }
}
