﻿import {useContext} from "react";
import {GameStateDispatchContext} from "./contexts/GameStateContext.ts";
import {ToastContainer, toast, Bounce} from "react-toastify";

const Events = () => {
    const dispatch = useContext(GameStateDispatchContext)

    document.addEventListener('gameTick', () => {
        dispatch?.({type: 'gameTick'})
    })

    document.addEventListener('timeTick', () => {
        dispatch?.({type: 'timeTick'})
    })

    document.addEventListener('addHuman', () => {
        dispatch?.({type: 'addHuman'})
    })

    document.addEventListener('daysAddedSinceLastSave', (event) => {
        const {detail} = event as unknown as { detail: number }
        if (detail <= 0) return
        setTimeout(() => toast(`Your village has progressed ${detail} days since your last save.`), 1000)
    })

    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="light"
                transition={Bounce}
            />
        </>
    )
}

export default Events