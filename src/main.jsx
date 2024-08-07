import React from "react"
import ReactDOM from "react-dom/client"
import "./i18n"
import "./index.css"
import {MovieFinderApp} from "./MovieFinderApp.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieFinderApp />
  </React.StrictMode>
)
