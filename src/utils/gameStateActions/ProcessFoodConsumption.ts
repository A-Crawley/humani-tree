import GameState from "types/GameState.ts";

export const processFoodConsumption = (gameState: GameState) => {
    const foodToConsume = (gameState.humans?.length ?? 0) * (gameState?.food?.berries.foodUnits ?? 1)
    if (foodToConsume === 0) return gameState
    const currentFood = gameState?.food?.berries?.amount ?? 0
    if (currentFood < foodToConsume) return {
        ...gameState,
        food: {...gameState.food, berries: {...gameState.food.berries, amount: 0}},
        humans: gameState.humans?.slice(1)
    } as GameState
    return {...gameState,
        food: {
            ...gameState.food,
            berries: {...gameState.food.berries, amount: currentFood - foodToConsume}
        }
    } as GameState;
}