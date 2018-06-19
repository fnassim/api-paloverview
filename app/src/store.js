import {createStore} from "redux";
import {Map} from "immutable";

export const setProjectsList = (projects) => ({type: 'setProjectsList', projects});
export const setProjectOpen = (isOpen) => ({type: 'setIsProjectOpen', isOpen});

const reducer = (state = Map(), action) => {
    const {type} = action;
    const actions = {
        'setProjectsList': s => s.setIn(["projects"], action.projects),
        'setIsProjectOpen': s => s.setIn(["isProjectOpen"], action.isOpen)
    }
    const actionFn = actions[type] || (s => s)
    return actionFn(state)
}

export default createStore(reducer, Map(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())