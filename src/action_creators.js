export function answer(answer, inTask) {
    "use strict";
    console.log('action', 'answer', answer);
    return {
        type: 'ANSWER',
        answer,
        inTask
    };
}

export function next(inTask) {
    "use strict";
    console.log('action', 'next');
    return {
        type: 'NEXT',
        inTask
    };
}