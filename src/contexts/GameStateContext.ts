import {ActionDispatch, createContext} from "react";
import GameState from "types/GameState.ts";
import {Action} from "types/Action.ts";

export const GameStateContext = createContext<GameState | null>(null);
export const GameStateDispatchContext = createContext<ActionDispatch<[action: Action]> | null>(null);