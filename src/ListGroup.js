import React from 'react';
import ListGroupItem from './ListGroupItem';

function ListGroup(props){
    let listItems = [];
    for(let key in props.listItems) {
        let item = props.listItems[key];
        let itemCode = item.code;
        listItems.push(
        <ListGroupItem 
            key={key} 
            name={item.name} 
            onClick={()=>{
                if(props.onClick){
                    console.log("ListGroup item name:" + item.name);
                    props.onClick(itemCode);
                }
            }} 
        />);
    }
    if(listItems.length > 0){
        return(
            <div className={"list-group " + props.additionalClasses}>
                <div className="list-group-item list-group-item-primary">{props.name}</div>
                {listItems}
            </div>
        );
    }else{
        return (null);
    }  
}

export default ListGroup;

