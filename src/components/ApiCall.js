import React, { Component } from 'react'

 class ApiCall extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
         person: []
        }
      }
    
      componentDidMount() {
        this.UserList();
        console.log(this.state.person);
      }
      
      UserList() {
    
        // $.getJSON('https://randomuser.me/api/')
        //   .then(({ results }) => this.setState({ person: results }));
        
        return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
          //  return responseJson.movies;
           this.setState({ person: responseJson.movies })
          console.log(responseJson.movies);
          
        })
        .catch((error) => {
          console.error(error);
        });
    
      }
      pageNavigation = () =>{
        //alert("Great Shot!");
        let path = `TextEditor`;
    this.props.history.push(path);
      }

    render() {
        const persons = this.state.person.map((item, i) => (
            <div  key={item.id}>
              <h1>{ item.title }</h1>
              {/* <span>{ item.cell }, { item.email }</span> */}
            </div>
          ));

        return (
            <div>
                  <div id="layout-content" className="layout-content-wrapper">
    <div className="panel-list">{ persons }</div></div>
    <button onClick = {this.pageNavigation}>next</button>
            </div>
        )
    }
}

export default ApiCall
