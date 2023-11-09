export class Musico {

    instrumentos = new Array()

    // Este es el constructor para el ejercicio de botones Solista y Orquesta

    constructor(tipo, ...instrumentos) {
        this.instrumentos = instrumentos
        this.tipo = tipo
    }

    // Este es el constructor para el ejercicio del Select

    // constructor(tipo, instrumentos) {
    //         this.instrumentos = instrumentos
    //         this.tipo = tipo
    //     }


    tocar = () => {
        console.log(`el musico es de tipo ${this.tipo}`)

        this.instrumentos.forEach(instrumento => {
            console.log(instrumento.sonar())
            instrumento.sonar()
        })

    }

}

//     constructor(instrumentos) {
//         this.instrumentos = instrumentos
//     }

//     tocar = () => {

//         // Opción Previa

//         this.instrumentos.forEach(instrumento => {
//             console.log(instrumento.sonar())
//         })

//         // const sonidos = this.instrumentos.map(instrumento => instrumento.sonar());
//         // return sonidos;

//     }
// }