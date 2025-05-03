import {useContext, useMemo} from "react";
import {GameStateContext} from "../contexts/GameStateContext.ts";

const useGameState = () => {
    const gameState = useContext(GameStateContext)

    const time = useMemo(() => gameState?.time, [gameState?.time])
    const items = useMemo(() => gameState?.items, [gameState?.items])
    const humans = useMemo(() => gameState?.humans, [gameState?.humans])
    const buildings = useMemo(() => gameState?.buildings, [gameState?.buildings])

    return {time, items, humans, buildings}
}

export default useGameState