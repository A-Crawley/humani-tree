import {useContext} from "react";
import {GameStateDispatchContext} from "../contexts/GameStateContext.ts";
import Items from "types/Items.ts";
import {BuildingType} from "types/Buildings.ts";
import GameState from "types/GameState.ts";

const useGameStateProvider = () => {
    const dispatch = useContext(GameStateDispatchContext)

    const addItem = (key: keyof Items, amount: number = 1) => {
        dispatch?.({type: 'addItem', payload: {key, amount}})
    }

    const addFood = (food: keyof GameState['food'], amount: number = 1) => {
        dispatch?.({type: 'addFood', payload: {food, amount}})
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

    const reset = () => {
        dispatch?.({type: 'reset'})
    }

    return {addItem, addFood, addHuman, removeHuman, buyBuilding, reset}
}

export default useGameStateProvider