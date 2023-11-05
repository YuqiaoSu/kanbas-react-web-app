import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignments: [],
    assignment: { "_id": "A1", "title": "Default Assignment",
        "description":  "This is a sample description", "dueDate": "2023-01-10", "availableFromDate": "2023-01-01", "availableUntilDate": "2023-01-20"},
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                action.payload,
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload._id
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
        newAssignment:(state, action) => {
            state.assignment = initialState.assignment;
        },

        setAssignments:(state, action) => {
            state.assignments = action.payload;
            },
    },
});

export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment,newAssignment,setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;