import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from './components/Main'
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import { inject } from '@vercel/analytics';
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import About from './components/About'
import SignIn from './components/SignInPage'
import PricingPage from './components/PricingPage'
import ForgotPasswordPage from './components/ForgotPasswordPage'
import SignUp from './components/SignUpPage'


inject();

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<Main />} />
        <Route path="success" element={<Success />} />
        <Route path="cancel" element={<Cancel />} />
        <Route path="contact" element={<Contact />} /> {/* Add this line */}
        <Route path="about" element={<About />} /> {/* Add this line */}
        <Route path="signin" element={<SignIn />} /> {/* Add this line */}
        {/* <Route path="pricing" element={<PricingPage />} /> */}
        <Route path="forgotpassword" element={<ForgotPasswordPage />} /> {/* Add this line */}
        <Route path="signup" element={<SignUp />} /> {/* Add this line */}

      </Routes>
    </Router>
  );
}

export default App
