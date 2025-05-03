import {useContext} from "react";
import {GameStateDispatchContext} from "../contexts/GameStateContext.ts";
import Items from "types/Items.ts";
import {BuildingType} from "types/Buildings.ts";

const useGameStateProvider = () => {
    const dispatch = useContext(GameStateDispatchContext)

    const addItem = (key: keyof Items, amount: number = 1) => {
        dispatch?.({type: 'addItem', payload: {key, amount}})
    }

    const addHuman = () => {
        dispatch?.({type: 'addHuman'})
    }

    const removeHuman = () => {
        dispatch?.({type: 'removeHuman'})
    }

    const buyBuilding = (type: BuildingType) => {
        dispatch?.({type: 'buyBuilding', payload: {buildingType: type}})
    }

    return {addItem, addHuman, removeHuman, buyBuilding}
}

export default useGameStateProvider