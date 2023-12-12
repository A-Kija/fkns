import * as types from '../Constants/actionTypes';

export default function cartReducer(state, action) {

    let s = [...state];


    switch (action.type) {
        case types.ADD_TO_CART:
            if (!s.find(b => b.id === action.payload)) {
                s.push({ id: action.payload, quantity: 1 });
            } else {
                s.find(b => b.id === action.payload).quantity++;
            }
            break;
        default:
            break;
    }







    return s;


}