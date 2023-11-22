export class PaisesMn{

    getDatos = (url:string):Promise<any>=>{
        return new Promise (function(resolve,reject){
            fetch(url)/*cuando se recibe la respuesta*/
            .then(response => { response.json()/*cojo el json de la respuesta*/
            .then(datos => resolve(datos)) /*extraigo los datos y se los paso a la funcion*/   
        })
        }) 
    }
}