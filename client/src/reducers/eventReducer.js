import {v1 as uuid} from 'uuid';
import { GET_EVENT, ADD_ITEM, EDIT_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    events: [{
        id: uuid(),
        title: "Test event",
        description: "this is test event desc",
        time: 4321424124,
        location: "location",
        image:"youtube.com",
        link:"zoom.com",
        createdAt: 143281248129
    },
    {
        id: uuid(),
        title: "2nd Test event",
        description: "this is 2nd test event desc",
        time: 4321413244,
        location: "location 2",
        image:"youtube.com 2",
        link:"zoom.com 2",
        createdAt: 4321412341234
    }]
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_EVENT:
            return{
                ...state
            }
        default:
            return state

    }
}