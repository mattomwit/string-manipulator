import React from 'react';

function ToLowercase(props){
   return (
       <div className="mb-3">
            <h1>ToLowercase</h1>
            <button type="button" className="btn btn-success mr-3" onClick={()=>props.addToCurrentList({name:"To Lowercase", code:"ToLower"})}>
             Add action
            </button>
       </div>
    );
}

export default ToLowercase;