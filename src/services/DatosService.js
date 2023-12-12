import axios from "axios"


export default class DatosService{



    getDatos=url=>axios.get(url)
    

    /*
    function getDatos(url){
        return axios.get(url)
    }

    */
}