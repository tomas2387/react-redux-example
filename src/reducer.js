import {List, Map} from 'immutable';

function getCurrentTask(state, index) {
    return state.get('tasks').get(index);
}
function updateCurrentTask(state, task, index) {
    return state.setIn(['tasks', index], task);
}

function answer(state, answer, inTask) {
    "use strict";
    const task = getCurrentTask(state, inTask);
    const currentQuestionIndex = task.get('current');
    const currentQuestion = task.get('questions').get(currentQuestionIndex);

    const newInfo = currentQuestion.merge(Map({
        answered: true,
        userAnswer: answer,
        isCorrect: answer == currentQuestion.get('correctAnswer')
    }));
    return updateCurrentTask(state, task.setIn(['questions', currentQuestionIndex], newInfo), inTask);
}

function next(state, inTask) {
    "use strict";
    const task = getCurrentTask(state, inTask);
    const size = task.get('questions').size;
    const current = task.get('current');
    const nextCurrent = current + 1;
    if(nextCurrent >= size) {
        return state;
    }
    return updateCurrentTask(state, task.setIn(['current'], nextCurrent), inTask);
}

export default function(state = Map(), action = null) {
    "use strict";

    if (!action) {
        return state;
    }

    switch (action.type) {
        case 'ANSWER':
            return answer(state, action.answer, action.inTask);
        case 'NEXT':
            return next(state, action.inTask);
    }

    return state;
}
