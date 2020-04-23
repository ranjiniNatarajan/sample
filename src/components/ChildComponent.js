import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick = {props.greetHandler}>click</button> */}
            <button onClick = {() => props.greetHandler('childName')}>click</button>
        </div>
    )
}

export default ChildComponent
