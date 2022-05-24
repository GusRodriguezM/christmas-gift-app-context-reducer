import { types } from "../types/types";

export const giftsReducer = (state = [], action) => {

    switch (action.type) {
        case types.addGift:
            console.log(action);
            return [...state, action.payload];
        
        // case editTodo:
        //     break;

        // case duplicateTodo:
        //     break;

        case types.deleteGift:
            return state.filter(gift => gift.id !== action.payload);

        case types.cleanList:
            return [];
    
        default:
            return state;
    }

}