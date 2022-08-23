import axios from 'axios';

const url = 'http://localhost:5000/api/guide_add_Plan/';
// https://gocore.herokuapp.com/getguideCooperateHotels

class guide_add_Plan{

    //Create POST
    static insertGuidePlan(Title,tourDuration,Duration,startingCity,nextDestination,transportMethod,Accomodation){
        return axios.post(url,{
            
            text: Title,tourDuration,Duration,startingCity,nextDestination,transportMethod,Accomodation
            
        });
    }
}

export default guide_add_Plan;