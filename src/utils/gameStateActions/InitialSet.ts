import GameState from "types/GameState.ts";
import {progressTime} from "utils/gameStateActions/ProgressTime.ts";

export const initialSet = (payload: { state: GameState, lastSave: number }) => {
    if (typeof payload.state.time === 'number') payload.state.time = undefined
    const now = Date.now()
    if (now > payload.lastSave) {
        let daysToAdd = Math.floor((now - payload.lastSave) / 2500)
        if (daysToAdd > 4000) daysToAdd = 4000
        document.dispatchEvent(new CustomEvent<number>('daysAddedSinceLastSave', {detail: daysToAdd}))
        return {...payload.state, time: progressTime(payload.state.time, daysToAdd)}
    }
    return payload.state
}