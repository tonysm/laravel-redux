import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Example from './Example';
import About from './About';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Lorem'
        };
    }

    updateTitle(changes) {
        this.setState({
            title: changes.title + ' ' + Math.floor(Math.random() * 10000)
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/home">Example</Link></li>
                        <li><Link to="/home/about">About</Link></li>
                    </ul>

                    <hr/>

                    <Route exact path="/home" render={() => <Example title={this.state.title} onChange={this.updateTitle.bind(this)} />}/>
                    <Route path="/home/about" render={() => <About title={this.state.title} />}/>
                </div>
            </Router>
        );
    }
}