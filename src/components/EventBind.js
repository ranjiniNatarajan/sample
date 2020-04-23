import React, { Component } from 'react'

class EventBind extends Component {

constructor(props) {
    super(props)

    this.state = {
         message : 'Hello'
    }
    // this.eventBinding = this.eventBinding.bind(this)
}

// eventBinding(){
//     this.setState({
//        message :  'Bye'
//     })
// }
eventBinding = () =>{
    this.setState({
               message :  'Bye'
           })
}

    render() {
        return (
            <div>
    <div>{this.state.message}</div>
                {/* <button onClick = {this.eventBinding.bind(this)}>click</button> */}
                {/* <button onClick = { () => this.eventBinding()}>click</button> */}
                <button onClick = {this.eventBinding}>click</button>
            </div>
        )
    }
}

export default EventBind
