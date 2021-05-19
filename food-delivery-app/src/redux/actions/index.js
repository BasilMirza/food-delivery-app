import * as ACTIONS from './actionTypes';

export function AddUser(data) {
    return {
        type: ACTIONS.ADD_USER,
        payload: data,
    };
}
