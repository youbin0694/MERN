import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/User/SignUp';
import Login from './components/User/Login';
import Home from './components/Home';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={ <Home/> } />
                    <Route path="/user/signUp" element={ <SignUp/> } />
                    <Route path="/user/login" element={ <Login/> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
