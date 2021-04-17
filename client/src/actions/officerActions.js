import axios from 'axios';
import { returnErrors } from './errorActions';
import { tokenConfig } from './authActions';
import { GET_OFFICER, ADD_OFFICER, EDIT_OFFICER, DELETE_OFFICER, EVENTS_LOADING } from './types';

export const getOfficer = () => dispatch => {
    dispatch(setEventsLoading());
    axios
        .get('/api/officers')
        .then(res => 
            dispatch({
                type: GET_OFFICER,
                payload: res.data
            }))
        .catch(err => 
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteOfficer = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/officers/${id}`, tokenConfig(getState))
        .then(res => 
            dispatch({
                type: DELETE_OFFICER,
                payload: id
            })
        )
        .catch(err => 
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addOfficer = (officer) => (dispatch, getState) =>{
    axios
        .post('/api/officers', officer, tokenConfig(getState))
        .then(res=>
            dispatch({
                type: ADD_OFFICER,
                payload: res.data
            }))
        .catch(err => 
            dispatch(returnErrors(err.response.data, err.response.status))
        );
}

export const editOfficer = (id, update) => {
    return{
        type: EDIT_OFFICER,
        payload: id,
        update: update
    }
}

export const setEventsLoading = () => {
    return{
        type: EVENTS_LOADING
    }
}