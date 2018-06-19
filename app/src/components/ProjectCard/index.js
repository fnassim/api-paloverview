import {connect} from "react-redux"
import Pure from "./Pure.jsx"
import {
    setProjectOpen
} from "../../store.js"

// map state to props
const s = state => ({
    isProjectOpen : state.get("isProjectOpen")
});
// map dispatch to props
const d = dispatch => ({actionSetProjectOpen: (isProjectOpen) => dispatch(setProjectOpen(isProjectOpen))});

export default connect(s, d)(Pure)