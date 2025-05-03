import {Button} from "antd";
import useGameStateProvider from "hooks/useGameStateProvider.ts";

const EarlyActions = () => {
    const {addItem, addHuman, removeHuman} = useGameStateProvider()

    return (
        <>
            <Button size={'small'} onClick={() => addItem('sticks')}>Gather Sticks</Button>
            <Button size={'small'} onClick={() => addItem('berries')}>Gather Berries</Button>
            <Button size={'small'} onClick={() => addHuman()}>Add Human</Button>
            <Button size={'small'} onClick={() => removeHuman()}>Remove Human</Button>
        </>
    )
}

export default EarlyActions