import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { Auth0Provider } from "@auth0/auth0-react";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
  <Auth0Provider
        domain="dev-f1csguzlcnjvdu6v.us.auth0.com"
        clientId="8jsYbWz4sh9EGIb9lSeM8UEbve5shcQ0"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >

    <App />
    </Auth0Provider>
  </StrictMode>
  </BrowserRouter>,
)
