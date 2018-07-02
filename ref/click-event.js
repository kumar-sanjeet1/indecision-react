class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        }

        console.log(this)
    }

  add(){
    this.setState((state) => {
        return {
            count: state.count + 1
        }
    })
  } 


  sub(){
    this.setState((state) => {
        return {
            count: state.count - 1
        }
    })
} 


reset(){
    this.setState((state) => {
        return {
            count: 0
        }
    })
} 
    render(){
        return(
            <div>
                <h1>Count: {this.state.count }</h1>
                <button onClick={this.add}>+1</button>
                <button onClick={this.sub}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }


}

ReactDOM.render(<Counter />, document.getElementById('root'));























// let count = 0;
// const add =() => {
//     count++; 
//     renderTemplate();
// }
// const sub =() => {
//     count--; 
//     renderTemplate();
// }
// const res =() => {
//     console.log('RESET: ', count);
//     count = 0;
//     renderTemplate();
// }
// const onInput = () => {
//     console.log('RESET: ', count);
//     let input = document.getElementById('input');
//     input.addEventListener('change', function() {
//         count = input.value;
//         console.log('RESET: ', count);
//         renderTemplate();
//     })
  
// }


// const renderTemplate = () => {
//     var template2 = (
//         <div>
//         <input type="text" id="input" onChange={onInput}/>
//             <h1>Count: {count} </h1>
//             <button onClick={add}>+1</button>
//             <button onClick={sub}>-1</button>
//             <button onClick={res}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(template2, appRoot);
// }