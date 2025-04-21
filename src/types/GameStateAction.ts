export const GameStateActions = ['initialSet', 'addItem', 'removeItem', 'gameTick', 'timeTick'] as const;
type GameStateActionType = typeof GameStateActions[number];

export default GameStateActionType;
