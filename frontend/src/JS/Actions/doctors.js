import axios from "axios";
import {GET_DOCTORS_LOAD , GET_DOCTORS_SUCCESS , GET_DOCTORS_FAIL} from "../Constants/doctors";




export const getDoctors =async () =>dispatch => {
dispatch({type:GET_DOCTORS_LOAD})
try {
   let result = await axios.get("http://localhost:6000/api/doctor/") 
   dispatch ({type : GET_DOCTORS_SUCCESS , payload : result.data})
} catch (error) {
    dispatch ({type :GET_DOCTORS_FAIL , payload : error})
}
}