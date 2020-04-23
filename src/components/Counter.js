import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count :0
        }
    }
    increament(){
        this.setState({
            count : this.state.count + 1
        })
    }

    render() {
        return (
            <div>
              <div>check - {this.state.count} </div>
              <button onClick = {() => this.increament()}>click</button>
            </div>
        )
    }
}

export default Counter
