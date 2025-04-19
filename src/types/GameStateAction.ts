export const GameStateActions = ['initialSet', 'addItem', 'removeItem', 'gameTick'] as const;
type GameStateActionType = typeof GameStateActions[number];

export default GameStateActionType;
