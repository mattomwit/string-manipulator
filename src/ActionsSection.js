import React from 'react';

function ActionsSection(props){
   return (
       <div className="mb-3">
            <h1>Add Action</h1>
            <button type="button" className="btn btn-success mr-3" onClick={()=>console.log("add action to List!")}>
             Add action
            </button>
       </div>
    );
}

export default ActionsSection;