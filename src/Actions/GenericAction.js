import React from 'react';

function GenericAction(props){
   return (
       <div className="mb-3">
            <h1>{props.name}</h1>
            <button type="button" className="btn btn-success mr-3" onClick={()=>props.addToCurrentList({name: props.name, code:props.code})}>
             Add action
            </button>
       </div>
    );
}

export default GenericAction;