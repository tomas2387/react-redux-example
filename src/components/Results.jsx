import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Results = React.createClass({
    mixins: [PureRenderMixin],
    getPair: function() {
        "use strict";
        return this.props.pair || [];
    },
    getVotes: function(entry) {
        "use strict";
        if (this.props.score && this.props.score.has(entry)) {
            return this.props.score.get(entry);
        }
        return 0;
    },
    render: function() {
        "use strict";

        return <div></div>;

    }
});

function mapStateToProps(state) {
    "use strict";
    return {
        pair: state.getIn(['vote', 'pair']),
        score: state.getIn(['vote', 'score']),
        winner: state.get('winner')
    };
}

export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);
