import GameState from "types/GameState.ts";
import {addItemPayload} from "types/AddItemPayload.ts";
import Items from "types/Items.ts";
import add from "utils/Add.ts";

export const addItems = (gameState: GameState, payload?: addItemPayload) => {
    let items = gameState.items
    if (!payload) return items
    if (!items) items = {} as Items
    if (!items[payload.key]) items[payload.key] = {amount: 0, multiplier: 1}
    items[payload.key]!.amount = add(items[payload.key]!.amount, payload.amount)
    return {...gameState, items}
}