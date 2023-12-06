import counterReducer1 from './counterReducer1';
import counterReducer2 from './counterReducer2';

export default function counterReducer(state, action) {

    if (action.type >= 2000 && action.type <= 2999) {
        return counterReducer1(state, action);
    } else if (action.type >= 4000 && action.type <= 4999) {
        return counterReducer2(state, action);
    } else {
        return state;
    }
}