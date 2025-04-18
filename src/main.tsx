import {createRoot} from 'react-dom/client'
import './index.css'
import {CookiesProvider} from "react-cookie";
import App from "./App";
import EventWrapper from "./eventWrapper";


createRoot(document.getElementById('root')!).render(
    <CookiesProvider>
        <EventWrapper/>
        <App/>
    </CookiesProvider>
)
