import React from 'react';
import ListGroup from './ListGroup';
import TextArea from './TextArea';

class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = { 
          history: [{
              squares:Array(9).fill(null),
          }],
          stepNumber: 0,
          xIsNext: true,
       }; 
  }
  render(){
    return (
      <div className="App my-3 row">
        <div className="col-12 col-md-3 mb-3">
          <ListGroup name="Actions" />
        </div>
  
        <div className="col-12 col-md-6 mb-3 border rounded bg-white">
          <h1>String Manipulation</h1>
  
          <TextArea name="Input text" onChange={()=>{console.log("change")}}/>
          <TextArea name="Output text" />
         
        </div>
        
        <div className="col-12 col-md-3 mb-3">
            <ListGroup additionalClasses="mb-3" name="Saved Action Lists"/>
         
            <ListGroup name="Current Action List" />
        </div>
      </div>
    );
  }
  
}

export default App;
