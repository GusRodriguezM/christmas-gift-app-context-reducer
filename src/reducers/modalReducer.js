import { types } from "../types/types";

export const modalReducer = (state = false, action) => {

    switch (action.type) {
        case types.openModal:
            return state = action.payload;

        case types.closeModal:
            return state = action.payload;

        default:
            return state;
    }

}