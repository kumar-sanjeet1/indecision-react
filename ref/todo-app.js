var h1 = function(value, cls){
    if(cls) {
        return <h1 className={cls}>{value}</h1>;
    }
    return <h1>{value}</h1>;
}

var p = function(val) {
    return <p>{val}</p>
}

let app = {
    title: 'Our Indecision app',
    subtitle: 'Its doto app',
    options: []
}

const formSubmit = (e) => {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        templateRender();
    }
}

const makeDecision = () => {
    let random = Math.floor(Math.random() * app.options.length);
    alert(app.options[random]);
}
var appRoot = document.getElementById('root');



const templateRender = () => {
    let template = (
        <div>

            <h1 className="is-size-3">{app.title}</h1>
            <h2 className="is-size-4">{app.subtitle}</h2>
            <p>{app.options.length}</p>
            <button type="button" disabled={app.options.length === 0 } onClick={makeDecision}>What to do?</button>
            <p></p>
            <form onSubmit={formSubmit}>
                <input type="text" name="option"/>
                <button type="submit">Add Option</button>
            </form>

            <aside className="menu">
                <ul className="menu-list">
                    {app.options.map(el => {
                            return <li key={el}>{el}</li>
                    })}
                 </ul>
            </aside>

        </div>
    )
    ReactDOM.render(template, appRoot);
}

templateRender();