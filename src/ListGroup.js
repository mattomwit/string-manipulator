import React from 'react';
import ListGroupItem from './ListGroupItem';

function ListGroup(props){
    return(
        <div className={"list-group " + props.additionalClasses}>
            <div className="list-group-item list-group-item-primary">{props.name}</div>
            <ListGroupItem name="Action btn" onClick={()=>console.log("clicked!!!")}/>
            <ListGroupItem name="Action btn" onClick={()=>console.log("clicked!!!")}/>
            <ListGroupItem name="Action btn" onClick={()=>console.log("clicked!!!")}/>
            <ListGroupItem name="Action btn" onClick={()=>console.log("clicked!!!")}/>
            <ListGroupItem name="Action btn" onClick={()=>console.log("clicked!!!")}/>
        </div>
    );
}

export default ListGroup;

