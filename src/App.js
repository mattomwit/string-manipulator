import React from 'react';
import ListGroup from './ListGroup';
import MainSection from './MainSection';
import InputAction from './Actions/InputAction';
import Replace from './Actions/Replace';
import GenericAction from './Actions/GenericAction';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      sectionToRender: "Main",
      inputValue: "",
      outputValue:"Output Value",
      currentActionList: {},
      savedActionLists: {},
      currentActiveActionList: ""
    };

    this.availableActions = {
      Prepend: {
        name: "Prepend",
        component: <InputAction name="Prepend" code="Prepend" addToCurrentList={(actionObject)=>this.addActionToCurrentActionList(actionObject)}/>,
        action: (strValue, curentActionObj)=>{return curentActionObj.value + strValue},
        code: "Prepend"
      },
      Append: {
        name: "Append",
        component: <InputAction name="Append" code="Append" addToCurrentList={(actionObject)=>this.addActionToCurrentActionList(actionObject)}/>,
        action: (strValue, curentActionObj)=>{return strValue + curentActionObj.value},
        code: "Append"
      },
      ToLower: {
          name: "To Lowercase",
          component: <GenericAction name="To Lowercase" code="ToLower" addToCurrentList={(actionObject)=>this.addActionToCurrentActionList(actionObject)}/>,
          action: (strValue)=>{return strValue.toLowerCase()},
          code: "ToLower"
      },
      ToUpper:  {
        name: "To Uppercase",
        component: <GenericAction name="To Uppercase" code="ToUpper" addToCurrentList={(actionObject)=>this.addActionToCurrentActionList(actionObject)}/>,
        action: (strValue)=>{return strValue.toUpperCase()},
        code: "ToUpper"
      },
      Replace:{
        name: "Replace",
        component: <Replace addToCurrentList={(actionObject)=>this.addActionToCurrentActionList(actionObject)}/>,
        action: (strValue, curentActionObj)=>{return strValue.replace(new RegExp(curentActionObj.valueToReplace.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(!curentActionObj.caseSensitive?"gi":"g")),(typeof(curentActionObj.replaceWith)=="string")?curentActionObj.replaceWith.replace(/\$/g,"$$$$"):curentActionObj.replaceWith)},
        code: "Replace"
      }
      
    };

    this.onCurrentActiveActionListChanged = this.onCurrentActiveActionListChanged.bind(this);

    
  }

  componentDidMount() {
    this.loadSavedActionLists();
  }

  onInputTextChange(event){
    this.updateOutputString(event.target.value);
  }

  onCurrentActiveActionListChanged(event){
    this.setState({
      currentActiveActionList : event.target.value
    });
  }

  saveCurrentActionList(){
    if(this.state.currentActiveActionList.length > 0 && Object.keys(this.state.currentActionList).length > 0){
      let newSavedActionList = Object.assign({}, this.state.savedActionLists);
      newSavedActionList[this.state.currentActiveActionList] ={
        currentActionList: this.state.currentActionList,
        name: this.state.currentActiveActionList,
        code: this.state.currentActiveActionList
      };
      let strigify = JSON.stringify(newSavedActionList);
      console.log("stringify", strigify);
      localStorage.setItem("stringManipulatorSavedActionLists", strigify);
      this.setState({ 
        savedActionLists : newSavedActionList
      });
    }
  }

  removeActionFromCurrentActionList(actionObject)
  {
    let newCurrentActionList = Object.assign({}, this.state.currentActionList)
    for(let key in this.state.currentActionList) {
      if(this.state.currentActionList[key] === actionObject){
        delete newCurrentActionList[key];
      }
    }
    
    this.setState({
      currentActionList : newCurrentActionList
    },()=>this.updateOutputString(this.state.inputValue));
  }

  loadSavedActionLists(){
    this.setState({ 
      savedActionLists : JSON.parse(localStorage.getItem("stringManipulatorSavedActionLists"))
    });
  }

  loadActionList(actionObject){
     
    this.setState({
      currentActionList : Object.assign({}, this.state.savedActionLists[actionObject.code].currentActionList),
      currentActiveActionList : actionObject.code
    },()=>this.updateOutputString(this.state.inputValue));
  }

  updateOutputString(inputValue){
    let newString = inputValue;
    for(let key in this.state.currentActionList) {
      let curentActionObj = this.state.currentActionList[key];
      newString = this.availableActions[curentActionObj.code].action(newString, curentActionObj);
    }
    this.setState({
        inputValue : inputValue,
        outputValue : newString
    });
  }

  addActionToCurrentActionList(actionObject){
    let numberOfActions = Object.keys(this.state.currentActionList).length;
    let newCurrentActionList = Object.assign({}, this.state.currentActionList);
    newCurrentActionList[actionObject.code+numberOfActions] = actionObject;
    this.setState({
      sectionToRender: "Main",
      currentActionList: newCurrentActionList
    },
    ()=>this.updateOutputString(this.state.inputValue));
  }

  setSectionToRender(actionObject){
    this.setState({
      sectionToRender: actionObject.code
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
            onClick={(sectionObject)=>this.setSectionToRender(sectionObject)}
          />
        </div>
  
        <div className="col-12 col-md-6 mb-3 border rounded bg-white">
          {renderComponent}
          {this.renderReturnBtn(this.state.sectionToRender)}
          <details className="border rounded">
            <summary>current state object</summary>
            <pre>
              <code>
              {JSON.stringify(this.state,null, '\t')}
              </code>
            </pre>
          </details>
          
          <div className="form-group">
            <label htmlFor="current-action-list">Current action list</label>
            <input
                className="form-control" 
                id="current-action-list"
                value={this.state.currentActiveActionList}  
                onChange={this.onCurrentActiveActionListChanged}
            />  
          </div>
          <button type="button" className="btn btn-info mb-3" onClick={()=>this.saveCurrentActionList()}>
             Save action list
          </button>
        </div>
        
        <div className="col-12 col-md-3 mb-3">
            <ListGroup 
              additionalClasses="mb-3" 
              name="Saved Action Lists"
              onClick={(sectionObject)=>this.loadActionList(sectionObject)}
              listItems={this.state.savedActionLists}
            />
         
            <ListGroup 
              name="Current Action List" 
              description="(Click to remove)"
              listItems={this.state.currentActionList} 
              onClick={(sectionObject)=>this.removeActionFromCurrentActionList(sectionObject)}
            />
        </div>
      </div>
    );
  }
}

export default App;
