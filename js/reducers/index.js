import * as types from '../actions/actionTypes';
import * as actions from '../actions/actions';

const initialState = {
    userDetails: {
        email: 'test@test.com'
    }
}

export function fishTinder(state = initialState, action = {}) {
    switch(action.type) {
        case types.LOGIN:
            return {
                ...state,
            };
        default:
            return state;
    }
}