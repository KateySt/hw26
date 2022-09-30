import {ACTIONS} from './actions';
import {createStore} from 'redux';

const initialState = {
    toDoList: [],
    counter: 0,
};

const store = createStore(reducer,initialState);

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.SET_LIST:
            console.log('State => ', state, 'Action => ', action);
            return {
                ...state,
                counter: state.toDoList.unshift(action.value)
            };
        default:
            return state;
    }
}


export default store;














