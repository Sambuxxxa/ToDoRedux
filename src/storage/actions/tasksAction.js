import {ADD_TASK, CHANGE_COMPLETED, REMOVE_TASK} from "../../constants/redux";

export const addTask = (id, task, isCompleted) => ({
    type: ADD_TASK,
    id,
    task,
    isCompleted
})

export const removeTask = (id) => ({
    type: REMOVE_TASK,
    id
})

export const changeCompleted = (id, isCompleted) => ({
    type: CHANGE_COMPLETED,
    id,
    isCompleted
})
