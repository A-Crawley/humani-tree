import Items from "./Items";
import Human from "./Humans";
import Time from "types/Time.ts";

type GameState = {
    items?: Items
    humans?: Human[]
    time?: Time
}

export default GameState