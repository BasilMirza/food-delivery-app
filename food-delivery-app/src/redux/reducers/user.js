import * as ACTIONS from '../actions/actionTypes'


const initialState = {
   loggedInUser : '',
}

const addUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_USER: {
            console.log('User.js/redudcer', action.payload);
            return { ...state, loggedInUser: action.payload }
        };
        default:
            return state;
    }
}

export default addUserReducer;
