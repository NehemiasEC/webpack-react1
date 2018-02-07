import React from 'react';
import {render} from 'react-dom';

import './app.scss';

class App extends React.Component{
    render(){
        return <p>hola mundo</p>;
    }
}


render(<App/>, document.getElementById('app'));

