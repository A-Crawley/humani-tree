import {ReactNode, useEffect, useReducer} from "react";
import {useCookies} from "react-cookie";
import GameState from "types/GameState";
import { GameStateContext, GameStateDispatchContext } from "./GameStateContext";
import gameStateReducer from "utils/GameStateReducer.ts";

const initialGameState = {
    time: 0,
    items: {
        sticks: {
            amount: 0,
            multiplier: 1
        },
        logs: {}
    }
} as GameState

const GameStateProvider = ({children}: { children: ReactNode }) => {
    const [gameState, dispatch] = useReducer(
        gameStateReducer,
        initialGameState
    )
    const [cookies, setCookie] = useCookies(['gameState', 'lastSave'])

    useEffect(() => {
        setCookie('lastSave', Date.now(), {
            path: '/',
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30 * 12 * 5)
        })
        setCookie('gameState', gameState, {
            path: '/',
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30 * 12 * 5)
        })
    }, [gameState, setCookie]);

    useEffect(() => {
        if (cookies.gameState) {
            dispatch({type: 'initialSet', payload: {state: cookies.gameState, lastSave: cookies.lastSave}})
        }
    });

    return (
        <GameStateContext.Provider value={gameState}>
            <GameStateDispatchContext.Provider value={dispatch}>
                {children}
            </GameStateDispatchContext.Provider>
        </GameStateContext.Provider>
    )
}
export default GameStateProvider;