import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export const Pregunta = React.createClass({
    mixins: [PureRenderMixin],
    getCurrentQuestion: function() {
        return this.props.pregunta;
    },
    getOptions: function() {
        return this.getCurrentQuestion().get('options');
    },
    hasAnswered: function() {
        return Boolean(this.getCurrentQuestion().get('answered'));
    },
    classWhenAnswered: function(index) {
        if(!this.hasAnswered()) {
            return null;
        }

        return this.getCurrentQuestion().get('correctAnswer') == index ? "correct" : null;
    },
    render: function() {
        "use strict";
        return <div>
                <p className="question">{this.getCurrentQuestion().get('question')}</p>
                <div className="table">
                    <ul className="horizontal-list">
                        {this.getOptions().map((entry, index) => {
                            return <li key={index}>
                                <button
                                    onClick={this.props.answer.bind(this, index)}
                                    disabled={this.hasAnswered()}
                                    className={this.classWhenAnswered(index)}
                                >
                                    {entry}
                                </button>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="actionsContainer">
                    {this.hasAnswered() ? <button className="actionButton" onClick={this.props.next.bind(this)}>Siguiente</button> : null}
              </div>
        </div>;
    }
});
