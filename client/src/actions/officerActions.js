import { GET_OFFICER, ADD_OFFICER, EDIT_OFFICER, DELETE_OFFICER } from './types';

export const getOfficer = () => {
    return{
        type: GET_OFFICER
    };
};

export const deleteOfficer = (id) => {
    return{
        type: DELETE_OFFICER,
        payload: id
    };
};

export const addOfficer = (officer) => {
    return{
        type: ADD_OFFICER,
        payload: officer
    }
}

export const editOfficer = (id, update) => {
    return{
        type: EDIT_OFFICER,
        payload: id,
        update: update
    }
}