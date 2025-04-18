import useGameState from "hooks/UseGameState";
import Button from "components/Button";

const EarlyActions = () => {
    const {addItem} = useGameState()
    return (
        <>
            <Button variant='m' onClick={() => addItem('sticks', 1)}>Gather Sticks</Button>
            <Button variant='m' onClick={() => addItem('berries', 1)}>Gather Berries</Button>
        </>
    )
}

export default EarlyActions