import GameState from "types/GameState.ts";
import {processFoodConsumption} from "utils/gameStateActions/ProcessFoodConsumption.ts";

export const gameTick = (gameState: GameState) => {
    if (document.cookie.includes('noTimeTick')) return gameState
    gameState = processFoodConsumption(gameState)
    return gameState;
}