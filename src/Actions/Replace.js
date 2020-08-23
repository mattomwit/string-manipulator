import React from 'react';

function Replace(props){
   return (
       <div className="mb-3">
            <h1>Replace</h1>
            <button type="button" className="btn btn-success mr-3" onClick={()=>props.addToCurrentList({name:"Replace", code:"Replace"})}>
             Add action
            </button>
       </div>
    );
}

export default Replace;