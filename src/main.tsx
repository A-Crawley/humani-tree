import {createRoot} from 'react-dom/client'
import './index.css'
import {CookiesProvider} from "react-cookie";
import App from "./App";
import EventWrapper from "./EventWrapper";
import Events from "./Events.tsx";
import GameStateProvider from "./contexts/GameStateProvider.tsx";


createRoot(document.getElementById('root')!).render(
    <CookiesProvider>
        <GameStateProvider>
            <EventWrapper/>
            <Events/>
            <App/>
        </GameStateProvider>
    </CookiesProvider>
)
