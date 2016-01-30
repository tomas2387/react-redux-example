import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import {Link} from 'react-router';
import Pregunta from './Pregunta';


export const Examen = React.createClass({
    mixins: [PureRenderMixin],
    getTaskIndex: function() {
        return this.props.params.task || 0;
    },
    getCurrentTask: function () {
        return this.props.tasks.get(this.getTaskIndex());
    },
    render: function () {
        "use strict";
        const task = this.getCurrentTask();
        const current = task.get('current');
        const pregunta = task.getIn(['questions', current]);
        return <div>
            <div className="header">
                <h1 className="title">{task.get('name')}</h1>
                <Link to="/results" className="likeAButton resultsButton">Resultados</Link>
                <div>
                    <Link to="/task/0">Tarea 1</Link>
                    <Link to="/task/1">Tarea 2</Link>
                    <Link to="/task/2">Tarea 3</Link>
                    <Link to="/task/3">Tarea 4</Link>
                    <Link to="/task/4">Tarea 5</Link>
                </div>
            </div>
            <Pregunta pregunta={pregunta}
                      answer={(answer) => this.props.answer(answer,this.getTaskIndex())}
                      next={() => this.props.next(this.getTaskIndex())} />
        </div>;
    }
});

function mapStateToProps(state) {
    "use strict";
    const tasks = state.get('tasks');
    return {
        tasks
    };
}
export default connect(mapStateToProps, actionCreators)(Examen);
