export class Paises {
    constructor() {
        /* url:string
    
        constructor(url:string){
            this.url = url
        } */
        this.getDatos = (url) => {
            return new Promise(function (resolve, reject) {
                fetch(url).then(response => response.json())
                    .then(datos => resolve(datos));
            });
        };
    }
}
