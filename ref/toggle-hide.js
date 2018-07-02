

class ToggleVisibility extends React.Component {
    
    constructor(props){
            super(props);
            this.toggleClick = this.toggleClick.bind(this);
            this.state = {
                visibilityState : false
            }
    }

    toggleClick() {
        this.setState((state) => {
          return {
            visibilityState: !state.visibilityState
          }
        });      
    }

    render(){
        const msg = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci !';
        return (
            <div>
                <h1>Visibilty Toogle</h1>
                <button onClick={this.toggleClick}>{ !this.state.visibilityState ? 'Show Text' : 'Hide Details' }</button>
                <br />
                { this.state.visibilityState && <p>{msg}</p> }
            </div>

        )
    }
}



ReactDOM.render(<ToggleVisibility />, document.getElementById('root'));

















// var appRoot = document.getElementById('root');

// const msg = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci !'
// let isHidden=true;

// const showText = () => {
//    isHidden = !isHidden;
//     templateRender();
// }
// const templateRender = () => {
//     let template = (
//         <div>
//              <h1>Visibilty toogle</h1>
//              <button onClick={showText}> {!isHidden ? 'Hide Details' : 'Show Details'}</button>
//              {!isHidden && <p> {msg}</p>}
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// }

// templateRender();