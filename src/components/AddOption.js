import React from 'react';

export default class AddOption extends React.Component {
state = { error: undefined }
    

    formSubmit = (e) => {
        e.preventDefault();
        let item = e.target.elements.option.value; 
        e.target.elements.option.value = '';
        const error = this.props.addOptions(item);
        this.setState(() =>  ({error}));
    }

    render(){
 
        return(
           <div>
            {this.state.error && <p>{this.state.error}</p>}

            <form onSubmit={this.formSubmit}>
                <input type="text" name="option" placeholder="Add Todo" />
                <input type="submit" value="submit" />
            </form>
            </div>
        )
    }
}