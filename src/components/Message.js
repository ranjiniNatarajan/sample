import React ,{Component} from 'react';

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message : 'State Message'
        }
    }

    textChange (){
        this.setState ( {
            message : 'Thank you'
        })
    }
    render(){
        return(
            <div>
        <h1>Class Component - {this.state.message}</h1>
        <button onClick = {() => this.textChange()}> subscribe</button>
        </div>
        );
    }
}
export default Message;