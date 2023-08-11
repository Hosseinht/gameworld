import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import App from './App'
import theme from "./theme";
import './index.css'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                <App/>
            </DevSupport>
        </ChakraProvider>
    </React.StrictMode>,
)
