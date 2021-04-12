import axios from 'axios';
import { GET_EVENT, ADD_EVENT, EDIT_EVENT, DELETE_EVENT, EVENTS_LOADING } from './types';

export const getEvent = () => dispatch => {
    dispatch(setEventsLoading());
    console.log("hi");
    axios
        .get('/api/events')
        .then(res => 
            dispatch({
                type: GET_EVENT,
                payload: res.data
            }))
        .catch( e =>(
            console.log(e)
        ))
};

export const deleteEvent = (id) => dispatch => {
    axios
        .delete(`/api/events/${id}`)
        .then(res => 
            dispatch({
                type: DELETE_EVENT,
                payload: id
            })
        )
};

export const addEvent = (event) => dispatch => {
    console.log("hi");
    axios
        .post('/api/events', event)
        .then(res=>
            dispatch({
                type: ADD_EVENT,
                payload: res.data
            }))
}

export const editEvent = (id, update) => {
    return{
        type: EDIT_EVENT,
        payload: id,
        update: update
    }
}

export const setEventsLoading = () => {
    return{
        type: EVENTS_LOADING
    }
}
