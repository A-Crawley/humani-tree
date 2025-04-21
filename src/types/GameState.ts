import Items from "./Items";
import Human from "./Humans";
import Time from "types/Time.ts";
import {BuildingType} from "types/Buildings.ts";

type GameState = {
    items?: Items
    humans?: Human[]
    time?: Time
    buildings?: Record<BuildingType, number>
}

export default GameState