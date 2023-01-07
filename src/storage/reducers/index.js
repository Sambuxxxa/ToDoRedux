import tasks from "./tasksReducer";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {tasks},
})
