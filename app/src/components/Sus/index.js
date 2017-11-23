import {connect} from "react-redux"
import Pure from "./Pure.jsx"
import {
    plus,
    minus
} from "../../store.js"

// map state to props
const s = state => ({counter : state.get("cpt")})
// map dispatch to props
const d = dispatch => ({actionPlus: (k, i) => dispatch(plus(k, i)),
                        actionMinus: (k, i) => dispatch(minus(k, i)),
})

export default connect(s, d)(Pure)