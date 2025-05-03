import useGameState from "hooks/UseGameState.ts";
import {Button} from "antd";
import {useCookies} from "react-cookie";
import useGameStateProvider from "hooks/useGameStateProvider.ts";
import useModal from "antd/es/modal/useModal";

const TimeDisplay = () => {
    const {time} = useGameState()
    const {reset} = useGameStateProvider()
    const [, setCookies] = useCookies()
    const [modal, context] = useModal()

    const handlePause = () => {
        setCookies('noTimeTick', { path: '/', expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30 * 12 * 5) })
    }

    const handleResume = () => {
        setCookies('noTimeTick', null, { path: '/', expires: new Date(Date.now()) })
    }

    const handleReset = async () => {
        const result = await modal.confirm({title: 'Are you sure you want to reset the game?'})
        if (result) {
            reset()
        }
    }

    return (
        <div className='p-3'>
            <p>Year <span>{time?.year}</span> - <span>{time?.season}</span>, day <span>{time?.date}</span></p>
            <Button size={'small'} onClick={handlePause}>Pause</Button>
            <Button size={'small'} onClick={handleResume}>Resume</Button>
            <Button size={'small'} onClick={handleReset}>Reset</Button>
            {context}
        </div>
    )
}

export default TimeDisplay