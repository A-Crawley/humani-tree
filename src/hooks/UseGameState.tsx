import {useContext, useMemo} from "react";
import {GameStateContext} from "../contexts/GameStateContext.ts";

const useGameState = () => {
    const gameState = useContext(GameStateContext)

    const time = useMemo(() => gameState?.time, [gameState?.time])
    const items = useMemo(() => gameState?.items, [gameState?.items])

    return {time, items}
}

export default useGameState