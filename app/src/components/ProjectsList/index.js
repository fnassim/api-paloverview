import {connect} from "react-redux"
import Pure from "./Pure.jsx"
import {
    setProjectsList,
    setProjectOpen
} from "../../store.js"

// map state to props
const s = state => ({
    projects : state.get("projects"),
    isProjectOpen: state.get("isProjectOpen")
})
// map dispatch to props
const d = dispatch => ({
    actionSetProjectsList: (projects) => dispatch(setProjectsList(projects)),
    actionSetProjectOpen: (isProjectOpen) => dispatch(setProjectOpen(isProjectOpen))
})

export default connect(s, d)(Pure)