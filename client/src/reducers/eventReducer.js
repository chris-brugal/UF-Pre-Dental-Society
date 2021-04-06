import { GET_EVENT, ADD_EVENT, EDIT_EVENT, DELETE_EVENT, EVENTS_LOADING } from '../actions/types';

const initialState = {
    events: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_EVENT:
            return{
                ...state,
                events: action.payload,
                loading: false
            }
        case DELETE_EVENT:
            return{
                ...state,
                events: state.events.filter(event => event._id !== action.payload)
            }
        case ADD_EVENT:
            return{
                ...state,
                events: [action.payload, ...state.events]
            }
        case EDIT_EVENT:
            return state.map((event)=>{
                if(event.id === action.payload){
                    return{
                        ...event,
                        ...action.update
                       }    
                }else{
                    return event
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