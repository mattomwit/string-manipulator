import React from 'react';

class Replace extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valueToReplace : "",
            replaceWith : "",
            caseSensitive: false
        };

        this.onVelueToReplaceChanged = this.onVelueToReplaceChanged.bind(this);
        this.onReplaceWithChanged = this.onReplaceWithChanged.bind(this);
        this.onCaseSensitiveChanged = this.onCaseSensitiveChanged.bind(this);
    }

    onCaseSensitiveChanged(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({caseSensitive : value});
    }
    
    onVelueToReplaceChanged(event){
        this.setState({valueToReplace : event.target.value});
    }

    onReplaceWithChanged(event){
        this.setState({replaceWith : event.target.value});
    }

    generateCurrentStateObjectToSave(){
        let nameStart = this.state.caseSensitive?"Case sensitive replace ":"Replace";
        return {
            name: nameStart + ' "' + this.state.valueToReplace + '" with "' + this.state.replaceWith + '"',
            code:"Replace",
            valueToReplace : this.state.valueToReplace,
            replaceWith : this.state.replaceWith,
            caseSensitive : this.state.caseSensitive
        };
    }

    render(){
        return (
            <div className="mb-3">
                 <h1>Replace</h1>
                 <div className="form-group">
                    <label htmlFor="value-to-replace">Value to replace</label>
                    <input  
                        className="form-control" 
                        id="value-to-replace"
                        value={this.state.valueToReplace}  
                        onChange={this.onVelueToReplaceChanged}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="replace-with">Value to replace with</label>
                    <input  
                        className="form-control" 
                        id="replace-with" 
                        value={this.state.replaceWith}  
                        onChange={this.onReplaceWithChanged}
                    />
                </div>
                <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="case-sensitive" value={this.state.caseSensitive} onChange={this.onCaseSensitiveChanged}/>
                    <label className="form-check-label" htmlFor="case-sensitive">Case sensitive</label>
                </div>
                 <button type="button" className="btn btn-success mr-3" onClick={()=>this.props.addToCurrentList(this.generateCurrentStateObjectToSave())}>
                  Add action
                 </button>
            </div>
        );
    }
}

export default Replace;