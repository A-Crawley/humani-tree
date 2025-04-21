import {useContext} from "react";
import {GameStateDispatchContext} from "../contexts/GameStateContext.ts";
import Items from "types/Items.ts";
import {Button} from "antd";

const EarlyActions = () => {
    const dispatch = useContext(GameStateDispatchContext)

    const handleAddItem = (key: keyof Items) => {
        dispatch?.({type: 'addItem', payload: {key, amount: 1}})
    }

    return (
        <>
            <Button size={'small'} onClick={() => handleAddItem('sticks')}>Gather Sticks</Button>
            <Button size={'small'} onClick={() => handleAddItem('berries')}>Gather Berries</Button>
        </>
    )
}

export default EarlyActions