import axios from 'axios';
import { returnErrors } from './errorActions';
import { tokenConfig } from './authActions';
import { GET_EVENT, ADD_EVENT, EDIT_EVENT, DELETE_EVENT, EVENTS_LOADING } from './types';

export const getEvent = () => dispatch => {
    dispatch(setEventsLoading());
    axios
        .get('/api/events')
        .then(res => 
            dispatch({
                type: GET_EVENT,
                payload: res.data
            }))
        .catch(err => 
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteEvent = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/events/${id}`, tokenConfig(getState))
        .then(res => 
            dispatch({
                type: DELETE_EVENT,
                payload: id
            })
        )
        .catch(err => 
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addEvent = (event) => (dispatch, getState) => {
    axios
        .post('/api/events', event, tokenConfig(getState))
        .then(res=>
            dispatch({
                type: ADD_EVENT,
                payload: res.data
            }))
        .catch(err => 
            dispatch(returnErrors(err.response.data, err.response.status))
        );
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
