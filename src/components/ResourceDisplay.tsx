﻿import useGameState from "hooks/UseGameState.ts";
import Resource from "components/Resource";

const ResourceDisplay = () => {
    const {items, food, humans} = useGameState()

    return (
        <div className='p-3 flex-col gap-2 w-full'>
            <Resource label='Sticks' amount={items?.sticks?.amount ?? 0}/>
            <Resource label='Berries' amount={food?.berries?.amount ?? 0}/>
            <Resource label='Humans' amount={humans?.length ?? 0}/>
        </div>
    )
}

export default ResourceDisplay