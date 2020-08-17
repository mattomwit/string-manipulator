import React from 'react';

function ActionsSection(props){
   return (
       <div>
            <h1>Add Action</h1>
            <button type="button" className="btn btn-success mr-3" onClick={()=>console.log("add action to List!")}>
             Add action
            </button>
            <button type="button" className="btn btn-info" onClick={()=>console.log("save action List!")}>
             Save action list
            </button>
       </div>
    );
}

export default ActionsSection;