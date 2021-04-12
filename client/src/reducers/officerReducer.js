import {v1 as uuid} from 'uuid';
import { GET_OFFICER, ADD_OFFICER, EDIT_OFFICER, DELETE_OFFICER } from '../actions/types';

const initialState = {
    officers: [{
        id: uuid(),
        displayName: "Firstname Lastname",
        position: "President",
        bio: "test Bio",
        image: "youtube.com",
        rank: 1,
        createdAt:431242314231
    },
    {
        id: uuid(),
        displayName: "Firstname2 Lastname2",
        position: "Vice President",
        bio: "test Bio",
        image: "youtube.com",
        rank: 2,
        createdAt:431242314235
    }]
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_OFFICER:
            return{
                ...state
            }
        case DELETE_OFFICER:
            return{
                ...state,
                officers: state.officers.filter(officer => officer.id !== action.payload)
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
        default:
            return state

    }
}