import React from 'react';
import ActionsSection from './Actions';
import TextArea from './TextArea';

function MainSection(props){
   if(props.state.sectionToRender === "Actions"){
    return (
        <ActionsSection/>
        );
   }else {
       return (
        <div>
            <h1>String Manipulation</h1>
  
            <TextArea name="Input text" onChange={()=>{console.log("change")}}/>
            <TextArea name="Output text" />
        </div>
       );
   }
}

export default MainSection;