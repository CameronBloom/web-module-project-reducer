import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CHANGE_MEMORY, CLEAR_DISPLAY } from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}
// state.total, action.payload, state.operation
const calculateMemory = (currAction, currOperation, currTotal, currMemory) => {
    switch(currAction) {
        case("M+"):
            return { total: currTotal, memory: currTotal };
        case("MR"):
            return { total: calculateResult(currTotal, currMemory, currOperation), memory: currMemory };
        case("MC"):
            return { total: currTotal, memory: 0 };
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        
        case(CHANGE_MEMORY):
            console.log(`made it to change memory...`)
            return ({ 
                ...state, 
                memory: calculateMemory(action.payload, state.operation, state.total, state.memory).memory,
                total: calculateMemory(action.payload, state.operation, state.total, state.memory).total,
            });

        case(CLEAR_DISPLAY):
            return({
                ...state,
                total: 0
            });

        default:
            return state;
    }
}

export default reducer;