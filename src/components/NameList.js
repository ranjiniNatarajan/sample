import React from 'react'
import Person from './Person';

function NameList() {
    const person = [
        {
            id:1,
            name : 'Max',
            age : 25
        },
        {
            id:2,
            name : 'Max1',
            age : 25
        },
        {
            id:3,
            name : 'Max2',
            age : 25
        }
    ];
const personList = person.map((person, index) => <Person key = {person.id} person = {person}/>)
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
