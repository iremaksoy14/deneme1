import {Date_Success_Action,Date_Error_Action} from './actionType'
import axios from 'axios'

const POST_TIME ="http://192.168.1.110:27001/api/checker/start";

   const timeAction = (timeZone,time) => {

    return axios.post(POST_TIME, {
        "TimeZone":timeZone,
        "Time": time,
        
    })
    .then(result => {
               // dispatch({ type: Date_Success_Action, payload: result.data })
            })
            .catch(err => {
               // dispatch({ type: Date_Error_Action, payload: "hata" })
               console.log(err)
            })
}
export default timeAction;



