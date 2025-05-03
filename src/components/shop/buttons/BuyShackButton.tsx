import {useMemo} from "react";
import useGameState from "hooks/UseGameState.ts";
import {Buildings} from "types/Buildings.ts";
import {Button} from "antd";
import useGameStateProvider from "hooks/useGameStateProvider.ts";

const BuyShackButton = () => {
    const {items, buildings} = useGameState()
    const {buyBuilding} = useGameStateProvider()
    const amountOfSticks = useMemo(() => items?.sticks?.amount ?? 0, [items?.sticks?.amount])

    const disableShack = useMemo(() => {
        if (!amountOfSticks) return true
        if (amountOfSticks < Buildings.shack.cost) return true
        return false
    }, [amountOfSticks])

    return (
        <Button size={'small'} disabled={disableShack} onClick={() => buyBuilding('shack')}>(<span>{buildings?.shack ?? 0}</span>)
            Build Shack</Button>
    )
}

export default BuyShackButton