import GameState from "types/GameState.ts";
import {progressTime} from "utils/gameStateActions/ProgressTime.ts";

export const timeTick = (state: GameState) => {
    if (document.cookie.includes('noTimeTick')) return state
    return {...state, time: progressTime(state.time)}
}