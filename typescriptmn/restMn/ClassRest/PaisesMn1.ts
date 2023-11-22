export class PaisesMn1{

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

