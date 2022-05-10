
export const giftsReducer = (state = [], action) => {

    switch (action.type) {
        case 'addTodo':
            console.log(action);
            return [...state, action.payload];
        
        // case editTodo:
        //     break;

        // case duplicateTodo:
        //     break;

        case 'deleteTodo':
            return state.filter(gift => gift.id !== action.payload);

        case 'cleanList':
            return [];
    
        default:
            break;
    }

}