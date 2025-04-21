import {useCallback, useContext, useMemo} from "react";
import {GameStateDispatchContext} from "../../../contexts/GameStateContext.ts";
import useGameState from "hooks/UseGameState.tsx";
import {Buildings} from "types/Buildings.ts";
import {Button} from "antd";

const BuyShackButton = () => {
    const dispatch = useContext(GameStateDispatchContext)
    const {items, buildings} = useGameState()
    const amountOfSticks = useMemo(() => items?.sticks?.amount ?? 0, [items?.sticks?.amount])

    const disableShack = useMemo(() => {
        if (!amountOfSticks) return true
        if (amountOfSticks < Buildings.shack.cost) return true
        return false
    }, [amountOfSticks])

    const handleBuildShack = useCallback(() => {
        dispatch?.({type: 'buyBuilding', payload: {buildingType: 'shack'}})
    }, [dispatch])

    return (
        <Button size={'small'} disabled={disableShack} onClick={handleBuildShack}>(<span>{buildings?.shack ?? 0}</span>)
            Build Shack</Button>
    )
}

export default BuyShackButton