import React from 'react';

function TextArea(props){
    let displayName = props.name.split(/\s/).join('');
    return(
        <div className="form-group">
            <label htmlFor={displayName}>{props.name}</label>
    <textarea className="form-control" id={displayName} onChange={()=>{if(props.onChange !== undefined)props.onChange()}} rows="5">{props.value}</textarea>
        </div>
    );
}

export default TextArea;