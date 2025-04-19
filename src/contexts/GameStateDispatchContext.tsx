import {ActionDispatch, createContext} from "react";
import {Action} from "types/Action.ts";

const GameStateDispatchContext = createContext<ActionDispatch<[action: Action]> | null>(null)

export default GameStateDispatchContext