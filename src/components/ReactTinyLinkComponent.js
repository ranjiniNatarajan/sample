import React, { Component } from 'react';
import {ReactTinyLink} from 'react-tiny-link';
// import {RNUrlPreview} from 'react-native-url-preview';

class ReactTinyLinkComponent extends Component {
    render() {
        return (
            <div>
               <ReactTinyLink
              cardSize="large"
              showGraphic={true}
              maxLine={2}
              minLine={1}
            // url="https://www.youtube.com/watch?v=CvegxBp0YIA"
          url="https://stackoverflow.com/"
          //  url="https://blog.hellojs.org/redux-form-is-an-awesome-way-to-handle-forms-in-a-redux-application-in-my-opinion-6b2713a815fa"
           // url="https://facebook.github.io/react-native/"
            //url="https://www.instagram.com/"
        />  
        {/* <RNUrlPreview text={"any text to be parsed , https://youtu.be/UwsrzCVZAb8"}/> */}
            </div>
        )
    }
}

export default ReactTinyLinkComponent
