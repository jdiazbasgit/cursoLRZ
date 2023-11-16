export class Paises{
    /* url:string

    constructor(url:string){
        this.url = url
    } */

    getDatos=(url:string):Promise<any>=>{
        return new Promise(function(resolve,reject){
            fetch(url).then(response=>response.json())
            .then(datos=>resolve(datos))
        })
    }
}