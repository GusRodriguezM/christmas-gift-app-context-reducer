import { types } from "../types/types";

export const activeGiftReducer = (state = null, action) => {
    
    switch (action.type) {
        case types.setActiveGift:
            return {...state, ...action.payload};

        case types.deleteActiveGift:
            return null;
    
        default:
            return state;
    }
}