import React from 'react';
import ListGroup from './ListGroup';
import MainSection from './MainSection';
import ToLower from './Actions/ToLowercase';
import ToUpper from './Actions/ToUppercase';
import Replace from './Actions/Replace';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      sectionToRender: "Main",
      inputValue: "",
      outputValue:"Output Value"
    };

    this.availableActions = {
      ToLower: {
          name: "To Lowercase",
          component: <ToLower addToCurrentList={(actionObject)=>this.addActionToCurrentActionList(actionObject)}/>,
          action: (strValue)=>{return strValue.toLowerCase()},
          code: "ToLower"
      },
      Replace:{
        name: "Replace",
        component: <Replace addToCurrentList={(actionObject)=>this.addActionToCurrentActionList(actionObject)}/>,
        action: (strValue, valueToReplace, valueToReplaceWith)=>{return strValue.replace(valueToReplace, valueToReplaceWith)},
        code: "Replace"
      },
      ToUpper:  {
        name: "To Uppercase",
        component: <ToUpper addToCurrentList={(actionObject)=>this.addActionToCurrentActionList(actionObject)}/>,
        action: (strValue)=>{return strValue.toUpperCase()},
        code: "ToUpper"
      }
    };

    this.currentActionList = {};
    this.onInputTextChange = this.onInputTextChange.bind(this);
  }

  onInputTextChange(event){
    let stringToModify = event.target.value;
    let newString = stringToModify;
    this.setState({
        inputValue : stringToModify,
        outputValue : newString
    });
  }

  addActionToCurrentActionList(actionObject){
    let newCurrentActionList = Object.assign({}, this.currentActionList);
    newCurrentActionList[actionObject.code] = actionObject;
    this.currentActionList = newCurrentActionList;
    this.setSectionToRender("Main");
  }

  setSectionToRender(sectionName){
    this.setState({
      sectionToRender: sectionName
    });
  }

  renderReturnBtn(sectionToRender){
    if(sectionToRender !== undefined && sectionToRender !== "Main")
    return (
    <button type="button" className="btn btn-info mr-2 mb-3" onClick={()=>this.setSectionToRender("Main")}>
      Back
    </button>
    );
  }

  render(){
    let renderComponent = {};
    if(this.state.sectionToRender === "Main" ||(this.state.sectionToRender === undefined || this.availableActions[this.state.sectionToRender].component === undefined)){
      renderComponent = <MainSection 
        parentState={this.state}
        outputValue={this.state.outputValue}
        inputValue={this.state.inputValue}
        onInputTextChange={(e)=>this.onInputTextChange(e)}
      />;
    }else{
      renderComponent = this.availableActions[this.state.sectionToRender].component;
    }

    return (
      <div className="App my-3 row">
        <div className="col-12 col-md-3 mb-3">
          <ListGroup 
            name="Actions" 
            listItems={this.availableActions}
            onClick={(sectionName)=>this.setSectionToRender(sectionName)}
          />
        </div>
  
        <div className="col-12 col-md-6 mb-3 border rounded bg-white">
          {renderComponent}
          {this.renderReturnBtn(this.state.sectionToRender)}
          <p>state</p>
          <p id="itemID">{JSON.stringify(this.state)}</p>
          <button type="button" className="btn btn-info mb-3" onClick={()=>console.log("save action List!")}>
             Save action list
          </button>
        </div>
        
        <div className="col-12 col-md-3 mb-3">
            <ListGroup 
              additionalClasses="mb-3" 
              name="Saved Action Lists"
              onClick={(sectionName)=>this.setSectionToRender(sectionName)}
              listItems={this.availableActions}
            />
         
            <ListGroup 
              name="Current Action List" 
              listItems={this.currentActionList} 
              onClick={(sectionName)=>console.log("Rocks")}
            />
        </div>
      </div>
    );
  }
  
}

export default App;
