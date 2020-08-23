import React from 'react';
import TextArea from './TextArea';

function MainSection(props){
    return (
    <div>
        <h1>String Manipulation</h1>

        <TextArea name="Input text" onChange={()=>{console.log("change")}}/>
        <TextArea name="Output text" value={props.outputValue} />
    </div>
    );
}

export default MainSection;