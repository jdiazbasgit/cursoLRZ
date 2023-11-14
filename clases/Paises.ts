export class Paises {



    // return new Promise(function (resolve, reject) {
    //    fetch(url)/*cuando se recibe la respuesta*/.then(response => {
    //        response.json()/*cojo el json de la respuesta*/.then(/*extraigo los datos y se los paso a la funcion*/datos => resolve(datos))
    //    })

    getDatos = (url: string): Promise<any> => { //La funcion devuelve una promesa que siempre es un objeto de tipo "any"

        return new Promise(function (resolve, reject) { //se suele usar las palabras resolve y reject
            fetch(url).then(response => { // si tengo la url entonces (then) haz esto{ }
                if (response.status !== 200) //si código de respuesta es incorrecto mandar mens de error
                    reject("se ha producido un error "+response.statusText)
                response.json().then(datos => resolve(datos)) //si ok: utiliza el metodo json de response y vuelca los datos

            })
        })

    }
}
