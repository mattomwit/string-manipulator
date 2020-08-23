import React from 'react';

function ToUppercase(props){
   return (
       <div className="mb-3">
            <h1>ToUppercase</h1>
            <button type="button" className="btn btn-success mr-3" onClick={()=>props.addToCurrentList({name:"To Uppercase", code:"ToUpper"})}>
             Add action
            </button>
       </div>
    );
}

export default ToUppercase;