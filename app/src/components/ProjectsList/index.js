import {connect} from "react-redux"
import Pure from "./Pure.jsx"
import {
    setProjectsList
} from "../../store.js"

// map state to props
const s = state => ({
    projects : state.get("projects")
})
// map dispatch to props
const d = dispatch => ({
    actionSetProjectsList: (projects) => dispatch(setProjectsList(projects)),
})

export default connect(s, d)(Pure)