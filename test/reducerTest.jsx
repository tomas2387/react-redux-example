import {List, Map, fromJS} from 'immutable';

import {assert} from 'chai';
import reducer from '../src/reducer';

suite('Reducer', () => {
    "use strict";

    [
        {
            initialState: fromJS({
                questions: [
                    {
                        question: "¿Cual es?",
                        options: [],
                        answered: false,
                        userAnswer: null,
                        correctAnswer: 1,
                        isCorrect: null
                    }
                ],
                current: 0
            }),
            action: {type: 'ANSWER', answer: 1},
            expected: fromJS({
                questions: [
                    {
                        question: "¿Cual es?",
                        options: [],
                        answered: true,
                        userAnswer: 1,
                        correctAnswer: 1,
                        isCorrect: true
                    }
                ],
                current: 0
            })
        },
        {
            initialState: fromJS({
                questions: [
                    {
                        question: "¿Cual es?",
                        options: [],
                        answered: true,
                        userAnswer: 1,
                        correctAnswer: 1,
                        isCorrect: true
                    },
                    {
                        question: "¿Cual es 2?",
                        options: [],
                        answered: false,
                        userAnswer: null,
                        correctAnswer: 0,
                        isCorrect: null
                    }
                ],
                current: 0
            }),
            action: {type: 'NEXT'},
            expected: fromJS({
                questions: [
                    {
                        question: "¿Cual es?",
                        options: [],
                        answered: true,
                        userAnswer: 1,
                        correctAnswer: 1,
                        isCorrect: true
                    },
                    {
                        question: "¿Cual es 2?",
                        options: [],
                        answered: false,
                        userAnswer: null,
                        correctAnswer: 0,
                        isCorrect: null
                    }
                ],
                current: 1
            })
        },
        {
            initialState: fromJS({
                questions: [
                    {
                        question: "¿Cual es?",
                        options: [],
                        answered: true,
                        userAnswer: 1,
                        correctAnswer: 1,
                        isCorrect: true
                    }
                ],
                current: 0
            }),
            action: {type: 'NEXT'},
            expected: fromJS({
                questions: [
                    {
                        question: "¿Cual es?",
                        options: [],
                        answered: true,
                        userAnswer: 1,
                        correctAnswer: 1,
                        isCorrect: true
                    }
                ],
                current: 0
            })
        }
    ].
    forEach(function(element, index) {

        test('#' + index + ' -> handles '+element.action.type, () => {
            const initialState = element.initialState;
            const action = element.action;
            const nextState = reducer(initialState, action);
            assert.equal(nextState, element.expected);
        });

    });

});
