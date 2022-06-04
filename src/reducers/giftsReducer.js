import { types } from "../types/types";

export const giftsReducer = (state = [], action) => {

    switch (action.type) {
        case types.addGift:
            console.log(action);
            return [...state, action.payload];
        
        case types.editGift:
            console.log(action);
            return state.map(gift => gift.id === action.payload.id ? action.payload : gift)

        case types.duplicateGift:
            console.log(action);

            if(action.payload.id < state.length - 1){
                return [...state.slice(0, action.payload.id + 1), action.payload.gift, ...state.slice(action.payload.id + 1, state.length)];
            }else{
                return [...state, action.payload.gift];
            }

        case types.deleteGift:
            return state.filter(gift => gift.id !== action.payload);

        case types.cleanList:
            return [];
    
        default:
            return state;
    }

}