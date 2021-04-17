import { GET_OFFICER, ADD_OFFICER, EDIT_OFFICER, DELETE_OFFICER, EVENTS_LOADING } from '../actions/types';

const initialState = {
    officers: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_OFFICER:
            return{
                ...state,
                officers: action.payload,
                loading: false
            }
        case DELETE_OFFICER:
            return{
                ...state,
                officers: state.officers.filter(officer => officer._id !== action.payload)
            }
        case ADD_OFFICER:
            return{
                ...state,
                officers: [action.payload, ...state.officers]
            }
        case EDIT_OFFICER:
            return state.map((officer)=>{
                if(officer.id === officer.payload){
                    return{
                        ...officer,
                        ...action.update
                       }    
                }else{
                    return officer
                };
        })
        case EVENTS_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state

    }
}