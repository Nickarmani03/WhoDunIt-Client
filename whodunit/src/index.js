import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
// import { Whodunit } from "./components/Whodunit.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Whodunit />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
