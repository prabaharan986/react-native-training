import { INC, DEC } from '../actionTypes';

const initialState = {
    counter: 0
}

export default function(prevState = initialState, action)  {
    switch (action.type) {
        case INC:
            return { counter: prevState.counter + 1 };
        case DEC:
            return { counter: prevState.counter - 1 };
        default:
            return prevState;
    }
} 