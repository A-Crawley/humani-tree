import GameState from "types/GameState.ts";

export const removeHuman = (state: GameState) => {
    if (!state.humans) return state
    return {...state, humans: state.humans.slice(1)};
}