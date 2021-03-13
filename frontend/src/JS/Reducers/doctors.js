// import constants
import {GET_DOCTORS_LOAD , GET_DOCTORS_SUCCESS , GET_DOCTORS_FAIL} from "../Constants/doctors";


// INITIALSTATE
const initialState = {
    doctors : [],
    loadDoctors: false,
    errors : null,
};

export const doctorReducer = (state = initialState , {type , payload}) => {
    switch (type) {
        case GET_DOCTORS_LOAD: return {...state ,loadDoctors:true };
            case GET_DOCTORS_SUCCESS: return {...state , doctors: payload , loadDoctors : false};
                case GET_DOCTORS_SUCCESS: return {...state , loadDoctors : true , errors : payload};
        default: return state;    
    }
};