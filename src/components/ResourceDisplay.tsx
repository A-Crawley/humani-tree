import useGameState from "hooks/UseGameState";
import Resource from "components/Resource";

const ResourceDisplay = () => {
    const {items} = useGameState()

    return (
        <div className='p-3 flex-col gap-2 w-full'>
            <Resource label='Sticks' amount={items?.sticks?.amount ?? 0}/>
            <Resource label='Berries' amount={items?.berries?.amount ?? 0}/>
        </div>
    )
}

export default ResourceDisplay