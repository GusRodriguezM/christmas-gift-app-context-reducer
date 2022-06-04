import { types } from "../types/types";

export const setActiveGift = (activeGift) => ({
    type: types.setActiveGift,
    payload: activeGift
});

export const deleteActiveGift = () => ({
    type: types.deleteActiveGift
})