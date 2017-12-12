import {connect} from "react-redux"
import Pure from "./Pure.jsx"
import {
} from "../../store.js"

// map state to props
const s = state => ({
    isCardOpen : state.get("isCardOpen")
});
// map dispatch to props
const d = dispatch => ({});

export default connect(s, d)(Pure)