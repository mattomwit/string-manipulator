import React from 'react';

class InputAction extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ""
        };

        this.onVelueChanged = this.onVelueChanged.bind(this);
    }

    onVelueChanged(event){
        this.setState({value : event.target.value});
    }

    render(){
        return (
            <div className="mb-3">
                <h1>{this.props.name}</h1>
                <div className="form-group">
                        <label htmlFor="value-to-add">Value to {this.props.name.toLowerCase()}</label>
                        <input
                            className="form-control" 
                            id="value-to-add"
                            value={this.state.value}  
                            onChange={this.onVelueChanged}
                        />
                    </div>
                <button type="button" className="btn btn-success mr-3" onClick={()=>this.props.addToCurrentList({name: this.props.name + ' "'+ this.state.value + '"' , code: this.props.code, value: this.state.value})}>
                Add action
                </button>
            </div>
        );
    }

}

export default InputAction;