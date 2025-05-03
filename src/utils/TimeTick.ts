import GameState from "types/GameState.ts";
import {progressTime} from "utils/gameStateActions/ProgressTime.ts";

export const timeTick = (state: GameState) => {
    return {...state, time: progressTime(state.time)}
}