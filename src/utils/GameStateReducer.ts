import GameState from "types/GameState.ts";
import {Action} from "types/Action.ts";
import {addItemPayload} from "types/AddItemPayload.ts";
import Items from "types/Items.ts";
import add from "utils/Add.ts";

const addItems = (items?: Items, payload?: addItemPayload) => {
    if (!payload) return items
    if (!items) items = {} as Items
    if (!items[payload.key]) items[payload.key] = {amount: 0, multiplier: 1}
    items[payload.key]!.amount = add(items[payload.key]!.amount, payload.amount)
    return items
}

const gameStateReducer = (state: GameState, action: Action) => {
    switch (action.type) {
        case 'initialSet': {
            const payload = action.payload as { state: GameState, lastSave: number }
            const now = Date.now()
            if (now > payload.lastSave) {
                const daysToAdd = Math.floor((now - payload.lastSave) / 1000)
                document.dispatchEvent(new CustomEvent<number>('daysAddedSinceLastSave', {detail: daysToAdd}))
                return {...payload.state, time: (payload.state.time ?? 0) + daysToAdd}
            }
            return payload.state
        }
        case 'addItem':
            return {...state, items: addItems(state.items, action.payload as addItemPayload)}
        case 'gameTick':
            return {...state, time: (state.time ?? 0) + 1}
        default:
            return state;
    }
}

export default gameStateReducer