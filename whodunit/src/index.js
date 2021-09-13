import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import { WhoDunIt } from "./components/WhoDunIt.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <WhoDunIt />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
