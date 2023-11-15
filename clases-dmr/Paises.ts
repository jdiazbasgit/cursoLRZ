export class Paises {



    // return new Promise(function (resolve, reject) {
    //    fetch(url)/*cuando se recibe la respuesta*/.then(response => {
    //        response.json()/*cojo el json de la respuesta*/.then(/*extraigo los datos y se los paso a la funcion*/datos => resolve(datos))
    //    })

    getDatos = (url: string): Promise<any> => {

        return new Promise(function (resolve, reject) {
            fetch(url).then(response => {
                if (response.status !== 200)
                    reject("se ha producido un error "+response.statusText)
                response.json().then(datos => resolve(datos))

            })
        })

    }
}
