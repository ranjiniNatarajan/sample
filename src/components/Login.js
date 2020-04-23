import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
        //this.setState({value: event.target.value.toUpperCase()});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        this.props.history.push(`TextEditor`);
        event.preventDefault();
      }
    
    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
            </div>
        )
    }
}

export default Login
