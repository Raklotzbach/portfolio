import React from 'react';
import Home from './src/Components/home';
import Bio from './src/Components/bio';
import Footer from './src/Components/footer';
import Navbar from './src/Components/navbar';
import Projects from './src/Components/projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route 
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/bio"
                        element={<Bio />}
                    />
                    <Route
                        path="/projects"
                        element={<Projects />}
                    />
                    <Route 
                        path="/resume"
                        element={<Resume />}
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App;