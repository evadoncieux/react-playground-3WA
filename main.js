const helloWorld = React.createElement('h1', {}, 'Hello world!');
const text = <h2>Coucou ?</h2>


// mauvaise pratique

//ReactDOM.render(helloWorld, document.body);

ReactDOM.render(helloWorld, document.querySelector('#app'));
ReactDOM.render(text, document.querySelector('#app'));
