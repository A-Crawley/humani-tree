import GameState from "types/GameState.ts";
import {processFoodConsumption} from "utils/gameStateActions/ProcessFoodConsumption.ts";

export const gameTick = (gameState: GameState) => {
    gameState = processFoodConsumption(gameState)
    return gameState;
}