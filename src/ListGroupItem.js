import React from 'react';

function ListGroupItem(props){
    let active ="";
    if(props.active){
        active="active";
    }
    return(
        
        <button type="button" className={"list-group-item list-group-item-action "+ active} onClick={()=>props.onClick()}>
        {props.name}
        </button>
    );
}

export default ListGroupItem;

