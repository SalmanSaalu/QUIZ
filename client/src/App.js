import { Signup } from './components/Signup/Signup'
import { Login } from './components/Login/Login'
import { Home } from './components/Home/Home'
import {Addquestion } from './components/Addquestion/Addquestion'
import { Takequiz } from './components/Takequiz/Takequiz'
import {Addqst} from './components/Added questions/Addedqst'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import React, { useEffect, useState } from 'react'
export const UserContext = React.createContext()

function App() {

  //checking question code
  const [codecheck, setCodecheck] = useState(0);
  //context for contain questions and options
  const [containquestion, setContainquestion] = useState([])
  const [containoption1,setContainoption1]= useState([])
  const [containoption2,setContainoption2]= useState([])
  const [containoption3,setContainoption3]= useState([])
  const [containoption4,setContainoption4]= useState([])
  
  //containing and adding answer
  const [demoanswer,setDemoanswer]=useState("")
  const [containanswer,setContainanswer]=useState([])

  //context for addquestion
  const [add,setAdd]=useState(1)
  const [addingquestion,setAddingquestion]=useState("")
  const [option1,setOption1]=useState("")
  const [option2,setOption2]=useState("")
  const [option3,setOption3]=useState("")
  const [option4,setOption4]=useState("")
  //context for takequiz
  const [allanswer, setAllanswer] = useState([])
  const [answer, setAnswer] = useState('')
  const [check, setCheck] = useState([])
  const [a, setA] = useState('')
  var [number, setNumber] = useState(1)

  const [qst,setQst]=useState()
  //context for logins
 
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
        <UserContext.Provider value={{codecheck,setCodecheck, setUsername, username, setAllanswer, allanswer, setAnswer, answer, check, setCheck, a, setA, number, setNumber,qst,setQst,add,setAdd,
        addingquestion,setAddingquestion,option1,setOption1,option2,setOption2,option3,setOption3,option4,setOption4,containquestion, setContainquestion,containoption1,setContainoption1,
        containoption2,setContainoption2,containoption3,setContainoption3,containoption4,setContainoption4,demoanswer,setDemoanswer,containanswer,setContainanswer}}>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/takequiz' element={<Takequiz />} />
            <Route path='/addquestion' element={<Addquestion />} />
            <Route path='/addedqst' element={<Addqst />} />
          </Routes>
        </UserContext.Provider>
      </Router>

    </div>
  );
}

export default App;