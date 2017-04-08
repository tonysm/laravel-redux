import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Example from './Example';
import About from './About';
import store from '../store';

export default class App extends Component {
    updateTitle(changes) {
        if (store.title !== changes.title) {
            store.dispatch({
                type: 'UPDATE_TITLE',
                title: changes.title
            });
        }
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

                    <Route exact path="/home" render={() => <Example {...store.getState()} onChange={this.updateTitle.bind(this)} />}/>
                    <Route path="/home/about" render={() => <About {...store.getState()} />}/>
                </div>
            </Router>
        );
    }
}