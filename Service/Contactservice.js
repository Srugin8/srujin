import axios from "axios";



export class Contactservice{
    static serverurl= ' http://localhost:9000';

    static getallcontacts(){
        let dataurl = '${this.serverurl}/Component';
        return axios.get(dataurl);
    }
}