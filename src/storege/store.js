import {ACTIONS} from './actions';
import {createStore} from 'redux';

const initialState = {
    ListInputThings: [],
    value: 0,
};

const store = createStore(reducer,initialState);

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.SET_LIST:
            console.log('State => ', state, 'Action => ', action);
            return {
                ...state,
                value: state.ListInputThings.unshift(action.value)
            };
        default:
            return state;
    }
}


export default store;














