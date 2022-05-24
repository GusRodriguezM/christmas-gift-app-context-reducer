import { types } from "../types/types"

export const addNewGift = (newGift) => ({
    type: types.addGift,
    payload: newGift
});

export const deleteGift = (id) => ({
    type: types.deleteGift,
    payload: id
});