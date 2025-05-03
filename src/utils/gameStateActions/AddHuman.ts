import GameState from "types/GameState.ts";
import {calculateOccupants} from "utils/gameStateActions/CalculateOccupants.ts";
import {generateHuman} from "utils/gameStateActions/GenerateHuman.ts";

export const addHuman = (gameState: GameState) => {
    if (gameState.food.berries.amount < 1) return gameState
    const totalHumansAllowed = calculateOccupants(gameState.buildings)
    if ((gameState.humans?.length ?? 0) >= totalHumansAllowed) return gameState
    return {...gameState, humans: [...(gameState.humans ?? []), generateHuman()]};
}