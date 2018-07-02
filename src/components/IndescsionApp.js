import React from 'react';

import AddOption from './AddOption';
import { Action } from './Action';
import Header from './Header';
import { Options } from './Options';
import OptionModel from './OptionModal';



export default class IndescsionApp extends React.Component {
    state = { options:[],
    selectedOption: undefined }

    componentDidMount = () => {
       try {
        let json = localStorage.getItem('options');
        let options = JSON.parse(json);
        if(options) {
            this.setState(() => ({options})); 
        }
       }
       catch(e) {

       }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            let json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }

    }
    componentWillUnmount(){
        console.log('unmount')
    }

    handleModel = () => {
        this.setState((state) => {
            return {
             selectedOption : undefined
            }
         })
    } 

    handleDeleteOptions = () =>{
        this.setState(() => ({options: []}));
    }

    handlePick = () => {
       let option = this.state.options[Math.floor(Math.random() * this.state.options.length)];   
        this.setState((state) => {
           return {
            selectedOption : option
           }
        })
    }

    handleAddOptions = (op) => {
        if(!op)  return 'Please enter a valid option';
        else if(this.state.options.indexOf(op) > -1) return 'Already Exists';
        this.setState((state) => ({options: state.options.concat(op)}));
    }

    handleDeleteOption = (option) =>  {
        this.setState((state) => ({
            options: state.options.filter((op) => option !== op)
        }));
    }

    render(){
        const title = 'Indecision App';
        const subtitle  = 'The todo list app';

        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action handlePick={this.handlePick} isDisabled={this.state.options.length}/>
                <br />
                <Options  options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                 />
                <br />
                <AddOption addOptions={this.handleAddOptions} />  
                <br />
                <OptionModel selectedOption={this.state.selectedOption} handleModel={this.handleModel}/>
            </div>
        );
    }

}

IndescsionApp.defaultProps  = {options: []}
