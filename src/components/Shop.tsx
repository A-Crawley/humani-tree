import Button from "components/Button.tsx";
import {GameStateDispatchContext} from "../contexts/GameStateContext.ts";
import {useCallback, useContext, useMemo} from "react";
import useGameState from "hooks/UseGameState.tsx";
import {Buildings} from "types/Buildings.ts";

const Shop = () => {
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
        <>
            <Button variant='m' disabled={disableShack} onClick={handleBuildShack}>(<span>{buildings?.shack ?? 0}</span>) Build Shack</Button>
        </>
    )
}

export default Shop