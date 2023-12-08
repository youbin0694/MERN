import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './User';
import Home from './Home';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={ <Home/> } />
                    <Route path="/api/User" element={ <User/> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
