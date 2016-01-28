import React from 'react';

import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {setState} from './action_creators';
import Router, {Route, IndexRoute} from 'react-router';
import App from './components/App';
import {ResultsContainer} from './components/Results';
import {ExamenContainer} from './components/Examen';
import * as immutable from 'immutable';
import {tarea1} from './data/tarea1';
import {tarea2} from './data/tarea2';
import {tarea3} from './data/tarea3';
import {tarea4} from './data/tarea4';

const state = immutable.fromJS(
    {
        tasks: [
            {
                name: 'Tarea 1',
                questions: tarea1,
                current: 0
            },
            {
                name: 'Tarea 2',
                questions: tarea2,
                current: 0
            },
            {
                name: 'Tarea 3',
                questions: tarea3,
                current: 0
            },
            {
                name: 'Tarea 4',
                questions: tarea4,
                current: 0
            },
            {
                name: 'Tarea 5',
                questions: {},
                current: 0
            }
        ]
});
const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer, state);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route component={App}>
                <IndexRoute component={ExamenContainer}/>
                <Route path="/" component={ExamenContainer} />
                <Route path="/task/:task" component={ExamenContainer} />
                <Route path="/results" component={ResultsContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
