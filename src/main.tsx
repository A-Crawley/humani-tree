import {createRoot} from 'react-dom/client'
import './index.css'
import {CookiesProvider} from "react-cookie";
import App from "./App";
import EventWrapper from "./EventWrapper";
import Events from "./Events.tsx";
import GameStateProvider from "./contexts/GameStateProvider.tsx";
import { ErrorBoundary } from 'react-error-boundary'
import ClearCookie from "./ClearCookie.tsx";


createRoot(document.getElementById('root')!).render(
    <ErrorBoundary fallback={(<ClearCookie />)}>
        <CookiesProvider>
            <GameStateProvider>
                <EventWrapper/>
                <Events/>
                <App/>
            </GameStateProvider>
        </CookiesProvider>
    </ErrorBoundary>
)
