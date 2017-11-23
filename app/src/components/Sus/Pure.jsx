import React from "react"

export default (props) => {
    return <div>
        <button onClick={() => props.actionMinus("cpt", 2)}>-</button>
        <button onClick={() => props.actionPlus("cpt", 2)}>+</button>
        <div>{props.counter}</div>
    </div>;
};