import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from './components/Main'
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<Main />} />
        <Route path="success" element={<Success />} />
        <Route path="cancel" element={<Cancel />} />
      </Routes>
    </Router>
  );
}

export default App
