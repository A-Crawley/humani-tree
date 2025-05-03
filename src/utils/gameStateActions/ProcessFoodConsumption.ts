import GameState from "types/GameState.ts";

export const processFoodConsumption = (gameState: GameState) => {
    const foodToConsume = (gameState.humans?.length ?? 0) * 1
    if (foodToConsume === 0) return gameState
    const currentFood = gameState?.items?.berries?.amount ?? 0
    if (currentFood < foodToConsume) return {
        ...gameState,
        items: {...gameState.items, berries: {amount: 0, multiplier: gameState?.items?.berries?.multiplier ?? 1}},
        humans: gameState.humans?.slice(1)
    }
    return {...gameState,
        items: {
            ...gameState.items,
            berries: {amount: currentFood - foodToConsume, multiplier: gameState?.items?.berries?.multiplier ?? 1}
        }
    };
}