import { types } from "../types/types";

export const activeGiftReducer = (state = {}, action) => {
    
    switch (action.type) {
        case types.setActiveGift:
            return {...state, ...action.payload};

        case types.deleteActiveGift:
            return {};
    
        default:
            return state;
    }
}