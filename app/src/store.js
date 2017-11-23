import {createStore} from "redux";
import {Map} from "immutable";

export const plus = (k, i) => ({type: 'plus', k, i})
export const minus = (k, i) => ({type: 'minus', k, i})

const reducer = (state = Map(), action) => {
    const {type} = action
    const actions = {
        'plus': s => s.update(action.k, (nb = 0) => nb + action.i),
        'minus': s => s.update(action.k, (nb = 0) => nb - action.i)
    }
    const actionFn = actions[type] || (s => s)
    return actionFn(state)
}

export default createStore(reducer, Map(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())