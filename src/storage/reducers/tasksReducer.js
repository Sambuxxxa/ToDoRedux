import {ADD_TASK, CHANGE_COMPLETED, REMOVE_TASK} from "../../constants/redux";

export default (state = [], {id, task, isCompleted, type}) => {
    switch (type) {
        case ADD_TASK:
            return [...state, {
                id,
                task,
                isCompleted
            }];
        case REMOVE_TASK:
            return state.filter((el) => el.id !== id);
        case CHANGE_COMPLETED:
            return state.map((el) => {
                if (el.id === id) {
                    return {
                        id,
                        task: el.task,
                        isCompleted
                    };
                } else {
                    return el;
                }
            });
        default:
            return state;
    }
}
