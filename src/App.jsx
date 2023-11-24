import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navigationbar from './views/Navigationbar'
import SignIn from './views/SignIn'
import SignUp from './views/SignUp';
import ForgotPassword from './views/ForgotPassword';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigationbar />}>
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="*" element={<SignIn />} />
        </Route>

      </Routes>
    </Router >
  );
}

export default App;

