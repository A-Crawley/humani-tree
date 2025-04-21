import useGameState from "hooks/UseGameState";

const TimeDisplay = () => {
    const {time} = useGameState()

    return (
        <div className='p-3'>
            <p>Year <span>{time?.year}</span> - <span>{time?.season}</span>, day <span>{time?.date}</span></p>
        </div>
    )
}

export default TimeDisplay