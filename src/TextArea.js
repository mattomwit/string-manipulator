import React from 'react';

function TextArea(props){
    let displayName = props.name.split(/\s/).join('');
    return(
        <div className="form-group">
            <label htmlFor={displayName}>{props.name}</label>
            <textarea className="form-control" id={displayName} value={props.value} onChange={(event)=>{if(props.onChange !== undefined)props.onChange(event)}} rows="5"/>
        </div>
    );
}

export default TextArea;