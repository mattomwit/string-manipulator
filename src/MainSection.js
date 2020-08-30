import React from 'react';
import TextArea from './TextArea';
import stringHelper from './Helpers/StringHelper';

function MainSection(props){
    return (
    <div>
        <h1>String Manipulation</h1>

        <TextArea name="Input text" value={props.inputValue} onChange={(e)=>props.onInputTextChange(e)}/>
        <TextArea name="Output text" value={props.outputValue} />
        {/* <details className="border rounded p-2">
            <summary><b>Output statistics:</b></summary>
            <div>Number of words: {stringHelper.countWords(props.outputValue)}</div>
            <div>Number of lines: {stringHelper.newLinesCount(props.outputValue)}</div>
            <div>Character count: {stringHelper.characterCount(props.outputValue)}</div>
            <div>Character count with spaces: {stringHelper.characterCount(props.outputValue, true)}</div>
            <div>Space count: {stringHelper.countWhiteSpace(props.outputValue)}</div>
        </details> */}
    </div>
    );
}

export default MainSection;