import {
    START,
    STOP
} from '../actionCreators';

export default function timerReducer(prevState = { counter : 0 }, action) {
    console.log(action);
    switch(action.type) {
        case START: return { counter: prevState.counter+1 }
        case STOP:
        default: return prevState;

    }
}