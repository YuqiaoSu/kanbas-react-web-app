import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Course/Modules/modulesReducer";
import assignmentsReducer from "../Course/Assignments/assignmentsReducer";


const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentsReducer
    }
});


export default store;