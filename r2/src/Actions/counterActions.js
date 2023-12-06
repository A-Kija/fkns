import { PLUS_1, PLUS_MANY, RESET } from '../Constants/counterTypes';

export function plus1() {
    return {
        type: PLUS_1
    };
}

export function reset() {
    return {
        type: RESET
    };
}

export function plusMany(n) {
    return {
        type: PLUS_MANY,
        payload: n
    };
}