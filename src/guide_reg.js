import axios from 'axios';

const url = 'http://localhost:5000/api/guide_Reg/';
// https://gocore.herokuapp.com/getguideCooperateHotels

class guide_reg{

    //Create POST
    static insertGuideSignUp(fName,NIC,phnNo,password,lName,Address,confPass){
        return axios.post(url,{
            text: fName,NIC,lName,Address,                 //also use text
            Number: phnNo,
            password: password,confPass
            
        });
    }

}

export default guide_reg;