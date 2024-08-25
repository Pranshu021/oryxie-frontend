import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import components from './components';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<components.Home />}/>
                    <Route path="*" element={<components.NotFound />} />
                </Routes>
            </Router>
        )
}

export default App;
