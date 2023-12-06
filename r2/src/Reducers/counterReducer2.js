import { PLUS_MANY } from '../Constants/counterTypes';

export default function counterReducer(state, action) {
    let s = state;

    switch (action.type) {
        case PLUS_MANY:
            s += action.payload;
            break;
        default:
    }

    return s;
}