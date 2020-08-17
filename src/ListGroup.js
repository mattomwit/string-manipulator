import React from 'react';
import ListGroupItem from './ListGroupItem';

function ListGroup(props){
    let listItems = props.listItems.map((item)=>
    <ListGroupItem key={item.name} name={item.name} onClick={()=>console.log(item.name)} />
    );

    return(
        <div className={"list-group " + props.additionalClasses}>
            <div className="list-group-item list-group-item-primary">{props.name}</div>
            {listItems}
        </div>
    );
}

export default ListGroup;

