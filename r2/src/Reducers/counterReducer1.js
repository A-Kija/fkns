import { PLUS_1, RESET } from '../Constants/counterTypes';

export default function counterReducer(state, action) {
    let s = state;

    switch (action.type) {
        case PLUS_1:
            s++;
            break;
        case RESET:
            s = 0;
            break;
        default:
    }

    return s;
}