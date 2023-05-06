import React from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"
import App from "./App"
import { UglyContextProvider } from "./components/UglyThingsContext"



ReactDOM.createRoot(document.getElementById('root')).render(
    <UglyContextProvider>
        <App/>
    </UglyContextProvider>
  )