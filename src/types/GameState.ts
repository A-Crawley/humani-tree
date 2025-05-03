import Items from "./Items";
import Human from "./Humans";
import Time from "types/Time.ts";
import {BuildingType} from "types/Buildings.ts";
import Item from "types/Item.ts";

type GameState = {
    items: Items
    food: {
        berries: Item & {foodUnits: number}
    }
    humans?: Human[]
    time?: Time
    buildings?: Record<BuildingType, number>
}

export default GameState