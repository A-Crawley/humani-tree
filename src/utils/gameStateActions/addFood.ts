import GameState from "types/GameState.ts";

const addFood = (gameState: GameState, payload: {food: keyof GameState['food'], amount?: number}) => {
    const {food, amount} = payload
    return {
        ...gameState,
        food: {...gameState.food, [food]: { ...gameState.food[food], amount: gameState.food[food].amount + (amount ?? 1)}}
    };
};

export default addFood;