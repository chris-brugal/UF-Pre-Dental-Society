import { GET_EVENT, ADD_ITEM, EDIT_ITEM, DELETE_ITEM } from './types';

export const getEvent = () => {
    return{
        type: GET_EVENT
    };
};