import {useCookies} from "react-cookie";
import {useEffect} from "react";

const ClearCookie = () => {
    const [,setCookies] = useCookies()

    useEffect(() => {
        setCookies('gameState', null)
        setCookies('lastSave', null)
        window.location.reload()
    })

    return (
        <></>
    )
}

export default ClearCookie