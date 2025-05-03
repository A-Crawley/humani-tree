import GameState from "types/GameState.ts";
import {Action} from "types/Action.ts";
import {addItemPayload} from "types/AddItemPayload.ts";
import {BuildingType} from "types/Buildings.ts";
import {initialSet} from "utils/gameStateActions/InitialSet.ts";
import {timeTick} from "utils/TimeTick.ts";
import {addItems} from "utils/gameStateActions/AddItems.ts";
import {addHuman} from "utils/gameStateActions/AddHuman.ts";
import {gameTick} from "utils/gameStateActions/GameTick.ts";
import {removeHuman} from "utils/gameStateActions/RemoveHuman.ts";
import {buyBuilding} from "utils/gameStateActions/BuyBuilding.ts";
import addFood from "utils/gameStateActions/addFood.ts";
import {initialGameState} from "../contexts/GameStateProvider.tsx";

const gameStateReducer = (state: GameState, action: Action) => {
    switch (action.type) {
        case 'reset':
            return initialGameState
        case 'initialSet':
            return initialSet(action.payload as { state: GameState, lastSave: number })
        case 'addItem':
            return addItems(state, action.payload as addItemPayload)
        case 'addFood':
            return addFood(state, action.payload as {food: keyof GameState["food"], amount?: number})
        case 'gameTick':
            return gameTick(state)
        case 'timeTick':
            return timeTick(state)
        case 'addHuman':
            return addHuman(state)
        case 'removeHuman':
            return removeHuman(state)
        case 'buyBuilding':
            return buyBuilding(state, (action.payload as {buildingType: BuildingType}).buildingType)
        default:
            return state;
    }
}

export default gameStateReducer