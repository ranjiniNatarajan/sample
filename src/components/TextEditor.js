import React, { Component } from 'react'
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};


class TextEditor extends Component {

  constructor(props) {
    super(props)
    const contentState = convertFromRaw(content);
    this.state = {
      contentState,
    }
  }
  
    // state = {
    //   editorState: EditorState.createEmpty(),
    //   }
    
    onContentStateChange = (contentState) => {
        this.setState({
          contentState,
        });
        console.log(this.state.contentState.blocks[0].text);
      };
    render() {
      const { contentState } = this.state;
        return (
            <div>
              {/* <Editor
  editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={this.onEditorStateChange}
/>   */}

<Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onContentStateChange={this.onContentStateChange}
          
        />
        
            </div>
        )
    }
}

export default TextEditor
