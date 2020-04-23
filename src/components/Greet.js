import React from 'react';
//  function Greet(){
//      return <h1>Hello World!</h1>
//  }

export const Greet = (props) => {
    return(
        <div>
        
    <h1 id = 'hello'>Functional Component {props.name}</h1>
    {props.children}
    </div>
    );
    //return React.createElement('div', {id : 'hello'}, 'hello world');
}
 //export default Greet;