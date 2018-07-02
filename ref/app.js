class IndescsionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options:[]
        }
    }

    componentDidMount(){
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
    componentWillUnmount() {
        console.log('unmount')
    }



    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }

    handlePick() {
        alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);   
    }

    handleAddOptions(op){
        if(!op)  return 'Please enter a valid option';
        else if(this.state.options.indexOf(op) > -1) return 'Already Exists';
        this.setState((state) => ({options: state.options.concat(op)}));
    }

    handleDeleteOption(option) {
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
                <Action handlePick={this.handlePick} isDisabled={this.state.options}/>
                <br />
                <Options  options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                 />
                <br />
                <AddOption addOptions={this.handleAddOptions} />  
         
            </div>
        );
    }

}

IndescsionApp.defaultProps  = {options: []}

const Header = (props) => {
        return(
            <div>
                <h1>{props.title}</h1>       
                <h3>{props.subtitle}</h3>
            </div>
    )
}



const Action = (props) => {
    return(
        <button onClick={props.handlePick} disabled={!props.isDisabled} >What should i do?</button>
    )
}


const Options = (props) => {

    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please enter something</p>}

            {
                props.options.map((option) => (
                    <Option key={option} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                     />
                ))          
            }
        </div>        
     )   
}




const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}>delete</button>  
        </div>
    )
}



class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.formSubmit = this.formSubmit.bind(this);

        this.state = {
            error: undefined
        }
    }
 
    formSubmit(e) {
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

 ReactDOM.render(<IndescsionApp />, document.getElementById('root'));

// class Header extends React.Component {

//     render() { return(
//         <div>
//             <h1>{this.props.title}</h1>       
//             <h3>{this.props.subtitle}</h3>
//         </div>
// )}
// }


// class Action extends React.Component {


//     render() { return(
//         <button onClick={this.props.handlePick}>What should i do?</button>
//     )}
// }

// class Options extends React.Component {

//     render() {
//         return(
//         <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             {
//                 this.props.options.map((option) => <Option key={option} optionText={option} />)          
//             }
//         </div>        
//      )}

// }


// class Option extends React.Component {

//     render() {
//         return(
//         <div>
//             {this.props.optionText}    
//         </div>
//         )
//     }

// }