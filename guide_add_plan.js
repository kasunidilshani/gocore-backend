import axios from 'axios';

const url = 'http://localhost:5000/api/guide_add_Plan/';
// https://gocore.herokuapp.com/getguideCooperateHotels

class guide_reg{

    //Create POST
    static insertGuidePlan(Duration,Destination,Method,Activities,Accomodation){
        return axios.post(url,{
            
            text: Duration,Destination,Method,Activities,Accomodation
            
        });
    }
}

export default guide_reg;