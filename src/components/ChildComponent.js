import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.greetHandler}>Say Hello</button>
        </div>
    )
}

export default ChildComponent
