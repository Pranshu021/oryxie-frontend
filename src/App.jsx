import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import components from './components';



function App() {
    return (
    <Router>
        {/* <components.NavigationBar /> */}
        <Routes>
                <Route path="/" element={<components.Home />}/>
                <Route path="/signup" element={<components.SignUp/>} />
                <Route path="/login" element={<components.Login/>} />

                <Route path="/:user/dashboard" element={
                    <components.PrivateRoute>
                        <components.Dashboard/>
                    </components.PrivateRoute>
                } />
                
                <Route path="*" element={<components.NotFound />} />

        </Routes>
    </Router>
        )
}

export default App;
