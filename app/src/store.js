import {createStore} from "redux";
import {Map} from "immutable";

export const setProjectsList = (projects) => ({type: 'setProjectsList', projects});

const reducer = (state = Map(), action) => {
    const {type} = action;
    const actions = {
        'setProjectsList': s => s.setIn(["projects"], action.projects)
    }
    const actionFn = actions[type] || (s => s)
    return actionFn(state)
}

export default createStore(reducer, Map(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())