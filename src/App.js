import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "./components";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Home from './pages/HomePage/Home';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
