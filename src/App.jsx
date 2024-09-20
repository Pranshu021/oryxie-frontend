import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import components from './components';



function App() {
    return (
    <Router>
        {/* <components.NavigationBar /> */}
        <Routes>
                <Route path="/" element={<components.Home />}/>
                <Route path="*" element={<components.NotFound />} />                    
        </Routes>
    </Router>
        )
}

export default App;
