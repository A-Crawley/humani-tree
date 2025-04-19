import {Seasons} from "types/Season.ts";
import Time from "types/Time.ts";

const convertTime = (time: number) => {
    const season = Seasons[Math.floor(time / 100) % Seasons.length]
    const year = Math.floor(time / (100 * Seasons.length)) + 1
    const date = (time % 99) + 1
    return {season, date, year} as Time
}

export default convertTime