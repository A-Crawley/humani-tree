import GameStateActionType from "types/GameStateAction.ts";
import {addItemPayload} from "./AddItemPayload.ts";

export type Action = {
    type: GameStateActionType,
    payload?: addItemPayload | unknown
}