import {useEffect, useState} from "react";

const EventWrapper = () => {
    const [gameTickInterval, setGameTickInterval] = useState<number | null>(null)
    const [timeTickInterval, setTimeTickInterval] = useState<number | null>(null)

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

    useEffect(() => {
        if (!timeTickInterval) {
            setTimeTickInterval(setInterval(() => {
                document.dispatchEvent(new Event('timeTick'))
            }, 2500))
        }
        return () => {
            if (!timeTickInterval) return
            clearInterval(timeTickInterval)
            setTimeTickInterval(null)
        }
    }, [timeTickInterval])

    return (
        <></>
    )
}

export default EventWrapper