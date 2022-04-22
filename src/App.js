import React from "react";
import './App.css';
// import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Header from "./components/Header/header";
import Content from "./components/HostedContent/content";

function App() {
    return (
        <>
            <Header />
            <Content />
        </>
    )
}

export default App;