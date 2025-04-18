import Items from "./Items";
import Human from "./Humans";

type GameState = {
    time?: number,
    items?: Items
    humans?: Human[]
}

export default GameState