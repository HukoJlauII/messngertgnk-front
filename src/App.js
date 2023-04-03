import {BrowserRouter} from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css'
import {AppRouter} from "./components/AppRouter";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
