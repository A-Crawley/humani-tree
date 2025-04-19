import {useEffect, useState} from "react";

const EventWrapper = () => {
    const [gameTickInterval, setGameTickInterval] = useState<number | null>(null)

    useEffect(() => {
        if (!gameTickInterval) {
            setGameTickInterval(setInterval(() => {
                document.dispatchEvent(new Event('gameTick'))
            }, 1000))
        }
        return () => {
            if (!gameTickInterval) return
            clearInterval(gameTickInterval)
            setGameTickInterval(null)
        }
    }, [gameTickInterval])

    return (
        <></>
    )
}

export default EventWrapper