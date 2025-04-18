import {useCookies} from "react-cookie";
import {useCallback, useMemo} from "react";
import GameState from "types/GameState";
import Items from "types/Items";
import add from "utils/Add";
import subtract from "utils/Subtract.ts";

const useGameState = () => {
    const [cookies, setCookie] = useCookies(['gameState'])
    const gameState = useMemo(() => {
        if (!cookies.gameState)
            return {time: 0, items: {}, humans: []} as GameState

        return cookies.gameState as GameState
    }, [cookies.gameState])

    document.addEventListener('gameTick', () => {
        if (!gameState.time) gameState.time = 0
        gameState.time++
        setCookie('gameState', gameState)
    })

    const save = useCallback(() => {
        setCookie('gameState', gameState)
    }, [gameState, setCookie])

    const time = useMemo(() => gameState.time, [gameState.time])
    const items = useMemo(() => gameState.items, [gameState.items])

    const addItem = useCallback((key: keyof Items, amount: number) => {
        if (!gameState.items) gameState.items = {} as Items
        if (!gameState.items[key]) gameState.items[key] = {amount: 0, multiplier: 1}
        gameState.items[key].amount = add(gameState.items[key].amount, amount)
        setCookie('gameState', gameState)
    }, [gameState, setCookie])

    const removeItem = useCallback((key: keyof Items, amount: number) => {
        if (!gameState.items) gameState.items = {} as Items
        if (!gameState.items[key]) gameState.items[key] = {amount: 0, multiplier: 1}
        gameState.items[key].amount = subtract(gameState.items[key].amount, amount)
        setCookie('gameState', gameState)
    }, [gameState, setCookie])

    return {time, items, addItem, removeItem, save}
}

export default useGameState