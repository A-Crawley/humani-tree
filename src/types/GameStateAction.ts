export const GameStateActions = ['initialSet', 'addItem', 'removeItem', 'gameTick', 'timeTick', 'buyBuilding', 'addHuman', 'removeHuman'] as const;
type GameStateActionType = typeof GameStateActions[number];

export default GameStateActionType;
