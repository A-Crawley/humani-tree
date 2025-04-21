import {useEffect, useState} from "react";

const useEventSender = (eventName: string, duration: number) => {
    const [tickInterval, setTickInterval] = useState<number | null>(null)

    useEffect(() => {
        if (!tickInterval) {
            setTickInterval(setInterval(() => {
                document.dispatchEvent(new Event(eventName))
            }, duration))
        }
        return () => {
            if (!tickInterval) return
            clearInterval(tickInterval)
            setTickInterval(null)
        }
    }, [tickInterval])
}

const EventWrapper = () => {
    useEventSender('gameTick', 1000)
    useEventSender('timeTick', 2500)
    useEventSender('addHuman', 20000)

    return (
        <></>
    )
}

export default EventWrapper