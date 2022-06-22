import { Signup } from './components/Signup/Signup'
import { Login } from './components/Login/Login'
import { Home } from './components/Home/Home'
import { Takequiz } from './components/Takequiz/Takequiz'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import React, { useEffect, useState } from 'react'
export const UserContext = React.createContext()

function App() {
  //context for questions
  const [answer, setAnswer] = useState('')
  const [check, setCheck] = useState([])
  const [a, setA] = useState('')
  const [allanswer, setAllanswer] = useState([])
  var [number, setNumber] = useState(1)

  //context for logins
  const [data, setData] = React.useState(null);
  const [username, setUsername] = React.useState('');
  useEffect(() => {
    setUsername(localStorage.getItem('username'))
  }, [])
  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ setUsername, username, setAllanswer, allanswer, setAnswer, answer, check, setCheck, a, setA, number, setNumber }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/takequiz' element={<Takequiz />} />
          </Routes>
        </UserContext.Provider>
      </Router>

    </div>
  );
}

export default App;