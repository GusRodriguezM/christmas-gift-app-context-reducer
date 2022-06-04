import { types } from "../types/types"

export const addNewGift = (newGift) => ({
    type: types.addGift,
    payload: newGift
});

export const editGift = (giftToEdit) => ({
    type: types.editGift,
    payload: giftToEdit
});

export const deleteGift = (id) => ({
    type: types.deleteGift,
    payload: id
});

export const cleanList = () => ({
    type: types.cleanList
});

export const duplicateGift = (id, giftToDuplicate) => ({
    type: types.duplicateGift,
    payload: {
        id,
        gift: {
            ...giftToDuplicate
        }
    }
});