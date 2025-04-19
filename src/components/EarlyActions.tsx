import Button from "components/Button";
import {useContext} from "react";
import {GameStateDispatchContext} from "../contexts/GameStateContext.ts";
import Items from "types/Items.ts";

const EarlyActions = () => {
    const dispatch = useContext(GameStateDispatchContext)

    const handleAddItem = (key: keyof Items) => {
        dispatch?.({type: 'addItem', payload: {key, amount: 1}})
    }

    return (
        <>
            <Button variant='m' onClick={() => handleAddItem('sticks')}>Gather Sticks</Button>
            <Button variant='m' onClick={() => handleAddItem('berries')}>Gather Berries</Button>
        </>
    )
}

export default EarlyActions