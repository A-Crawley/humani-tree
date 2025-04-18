import {useEffect, useState} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import UseGameState from './UseGameState.tsx'
import {CookiesProvider} from "react-cookie";


const EventWrapper = () => {
    const [gameTickInterval, setGameTickInterval] = useState<number | null>(null)

    useEffect(() => {
        if (gameTickInterval)
            clearInterval(gameTickInterval)
        setGameTickInterval(setInterval(() => {
            document.dispatchEvent(new Event('gameTick'))
        }, 1000))
        return () => {
            if (!gameTickInterval) return
            clearInterval(gameTickInterval)
            setGameTickInterval(null)
        }
    }, [])

    return (
        <></>
    )
}

createRoot(document.getElementById('root')!).render(
    <CookiesProvider>
        <EventWrapper/>
        <UseGameState/>
    </CookiesProvider>
)
