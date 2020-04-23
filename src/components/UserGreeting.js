import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedin: true
        }
    }

    render() {

        return this.state.isLoggedin && <div>  Flag True</div> //short circuit operator 

        // return (
        //     this.state.isLoggedin ?
        //         (<div>  Flag True</div>) :
        //         (<div>  Flag False</div>)
        // )


        // let message 
        // if(this.state.isLoggedin){
        //    message = <div>  Flag True</div>
        // }else{
        //     message = <div>  Flag False</div>
        // }
        // return <div>{message}</div> 


        // if(this.state.isLoggedin){
        //     return (
        //         <div>
        //             Flag True
        //         </div>
        //     )
        // }else{
        //     return (
        //         <div>
        //             Flag False
        //         </div>
        //     )
        // }

    }
}

export default UserGreeting
