import React from 'react';
import ListGroup from './ListGroup';
import MainSection from './MainSection';

class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = { 
        sectionToRender: "MainSection"
          
       }; 
       this.appData = {
        actions: [
          {
            name: "Actions",
            
          },
          {
            name: "Main",
            onClick: (sectionName)=>this.setSectionToRender(sectionName)
          }
        ]

       };

  }

  setSectionToRender(sectionName){
    this.setState({
      sectionToRender: sectionName
    });
  }

  render(){
    return (
      <div className="App my-3 row">
        <div className="col-12 col-md-3 mb-3">
          <ListGroup 
            name="Actions" 
            listItems={this.appData.actions}
          />
        </div>
  
        <div className="col-12 col-md-6 mb-3 border rounded bg-white">
          <MainSection state={this.state}/>
         
        </div>
        
        <div className="col-12 col-md-3 mb-3">
            <ListGroup 
              additionalClasses="mb-3" 
              name="Saved Action Lists"
              onClick={(sectionName)=>this.setSectionToRender(sectionName)}
              listItems={this.appData.actions}
            />
         
            <ListGroup 
              name="Current Action List" 
              listItems={this.appData.actions} 
            />
        </div>
      </div>
    );
  }
  
}

export default App;
