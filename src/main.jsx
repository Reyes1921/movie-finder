import React from "react"
import ReactDOM from "react-dom/client"
import {Home} from "./pages/Home.jsx"
import "./index.css"
import {MovieFinderApp} from "./MovieFinderApp.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieFinderApp />
  </React.StrictMode>
)
