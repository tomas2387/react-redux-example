import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Results = React.createClass({
    mixins: [PureRenderMixin],

    getScore: function(questionsInfo) {
        return questionsInfo.reduce((previousValue, currentValue) => (currentValue.get('isCorrect') ? previousValue+1 : previousValue), 0);
    },
    getTotal: function(questionsInfo) {
        return questionsInfo.size;
    },
    render: function() {
        "use strict";

        return <div><ol>
            {
                this.props.tasks.map((entry) =>
                        <li key={entry.get('name')}>{entry.get('name')} => Puntuacion:
                        {this.getScore(entry.get('questions'))}/ Total: {this.getTotal(entry.get('questions'))} ({this.getScore(entry.get('questions'))/this.getTotal(entry.get('questions'))*100}%)
                        </li>
                    )
            }
            </ol>
            </div>;

    }
});

function mapStateToProps(state) {
    "use strict";
    var tasks = state.get('tasks');
    return {
        total: tasks.size,
        tasks
    };
}

export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);
