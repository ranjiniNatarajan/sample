import React from 'react'

function Person({person}) {
    return (
        <div>
           <h1>name:{person.name}, age: {person.age}</h1> 
        </div>
    )
}

export default Person
