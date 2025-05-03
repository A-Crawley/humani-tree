export const GameStateActions = ['reset','initialSet', 'addItem', 'removeItem', 'gameTick', 'timeTick', 'buyBuilding', 'addHuman', 'removeHuman', 'addFood'] as const;
type GameStateActionType = typeof GameStateActions[number];

export default GameStateActionType;
