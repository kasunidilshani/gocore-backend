import axios from 'axios';

const url = 'http://localhost:5000/api/view_tour_Plan/';
// https://gocore.herokuapp.com/getguideCooperateHotels

class view_tour_plan{
    static get_view_tour_plan(){
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve,reject)=>{
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post =>({
                        ...post,
                        Duration: post.Duration,
                        Destination: post.Destination,
                        Method: post.Method,
                        Activities: post.Activities,
                        Accomodation: post.Accomodation
                    }))

                );
            }catch(err){
                reject(err);                
            }
        });
    }

}

export default view_tour_plan;