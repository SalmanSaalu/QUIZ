import React, { useState, useContext ,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../App'


function Takequiz() {
    // const [answer,setAnswer]=useState('')
    // const [check,setCheck]=useState([])
    // const [a,setA]=useState('')
    // const [w,setW]=useState(['1.What is your name','2.What is your age','3.What is your place','4.What is your counrty'])
    const navigate=useNavigate()
    // const [allanswer,setAllanswer]=useState([])
    // var [number,setNumber]=useState(1)
    var { number, setNumber, allanswer, setAllanswer, a, setA, check, setCheck, answer, setAnswer,qst,setQst } = useContext(UserContext);
    
    // console.log(number)
    // const [qst,setQst]=useState()
    
    useEffect(() =>{
       
        fetch("/getquestion")
        .then((res) => res.json())
        .then((data)=>{
          
          setQst(data)})
           
        
    },[])
 
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>QUESTIONS</h2><br />
            <button type="submit" className="signupbtn" onClick={(e)=>{
                            e.preventDefault()
                            console.log("1")
                            let databody = {
                                "number": 5,
                                "question": ' what is ur job?',
                                "option1":'student',
                                "option2":'employee',
                                "option3":'trainee',
                                "option4":'other',
                                
                            }
                            console.log("2")
                            return fetch('/question', {
                                method: 'POST',
                                body: JSON.stringify(databody),
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                
                            })
                            .then(res => {res.json()})
                            .then(navigate('/'))

                        }
                        
                    }>add question</button>
                
                <div>

                   {qst ? qst[number-1] ? 
                    <div>
                    <h4 style={{ paddingLeft: '30px' }} onClick={()=>console.log(qst[0].question)}>{number}{qst[number-1].question}</h4> 

                    <div style={{ paddingLeft: '30px' }}>
                        <input type="radio" name="name" checked={a === 'a'} value={qst[number-1].option1} onChange={(e) => {
                            
                            setAnswer(e.target.value)
                            setA("a")
                        }} />
                        <label >{qst[number-1].option1}</label><br />

                        <input type="radio" name="name" checked={a === 'b'} value={qst[number-1].option2} onChange={(e) => {
                            setAnswer(e.target.value)
                            setA("b")
                        }} />
                        <label >{qst[number-1].option2}</label><br />


                        <input type="radio" name="name" checked={a === 'c'} value={qst[number-1].option3} onChange={(e) => {
                            setAnswer(e.target.value)
                            setA("c")
                        }} />
                        <label >{qst[number-1].option3}</label><br />

                        <input type="radio" name="name" checked={a === 'd'} value={qst[number-1].option4} onChange={(e) => {
                            setAnswer(e.target.value)
                            setA("d")
                        }} />
                        <label >{qst[number-1].option4}</label><br />

                        <button onClick={() =>back(setNumber,number,setAnswer,allanswer,setA,check)} >Back</button>
                        <button onClick={()=>{if(a!=='n')  store(number, setNumber, allanswer, setAllanswer, a, setA, check, setCheck, answer, setAnswer) } }>submit</button>
                        <button onClick={() => next(check,number,allanswer,answer,setAnswer,setCheck,setNumber,setA,setAllanswer)}>next</button>
                        <button onClick={()=>{
                            setA('n')
                            setAnswer('')
                            let aa = [...check]
                            let bb = [...allanswer]
                            bb[number - 1] = ''
                            setAllanswer(bb)
                            aa[number - 1] = 'n'
                            setCheck(aa)
                            }}>clear response</button>

                    </div>
                    </div>: 
                    <div>
                    <button onClick={() =>back(setNumber,number,setAnswer,allanswer,setA,check)}>back</button>
                    <button onClick={(allAnswer)=>{console.log(allAnswer)}}>finish</button>
                    </div>:''}

                </div> 

           
                 
        </div>
                                       
    )
}


//functions to be called
const store=(number, setNumber, allanswer, setAllanswer, a, setA, check, setCheck, answer, setAnswer)=>{
    if (a === 'a') {
        let aa = [...check]
        const Index = aa?.[number - 1]
        let bb = [...allanswer]
        if (Index === undefined) {
            setAllanswer([...allanswer, answer])
            setAnswer('')
            aa[number - 1] = 'a'
            setCheck(aa)
            // console.log(number)
            setNumber(number=number + 1)
            // console.log(number)
            console.log('if index is undefined')
            setA('')
        }
        else {
            bb[number - 1] = answer
            setAllanswer(bb)
            aa[number - 1] = 'a'
            setCheck(aa)
            console.log('defined')
            const Index2 = aa?.[number]
            if (Index2 === undefined) {
                console.log("goodddd")
                setA('')
            }
            else {
                console.log('gppd2')
                setA(check[number])
            }
            // console.log(number)
            setNumber(number =number + 1)
            // console.log(number)
        }
    }
    else if (a === 'b') {
        let aa = [...check]
        const Index = aa?.[number - 1]
        let bb = [...allanswer]
        if (Index === undefined) {
            setAllanswer([...allanswer, answer])
            setAnswer('')
            aa[number - 1] = 'b'
            setCheck(aa)
            setNumber(number=number + 1)
            console.log('if index is undefined')
            setA('')
        }
        else {
            bb[number - 1] = answer
            setAllanswer(bb)
            aa[number - 1] = 'b'
            setCheck(aa)
            console.log('defined')
            const Index2 = aa?.[number]
            if (Index2 === undefined) {
                console.log("goodddd")
                setA('')
            }
            else {
                console.log('gppd2')
                setA(check[number])
            }
            setNumber(number=number + 1)
        }
    }
    else if (a === 'c') {
        let aa = [...check]
        const Index = aa?.[number - 1]
        let bb = [...allanswer]
        if (Index === undefined) {
            setAllanswer([...allanswer, answer])
            setAnswer('')
            aa[number - 1] = 'c'
            setCheck(aa)
            setNumber(number=number + 1)
            console.log('if index is undefined')
            setA('')
        }
        else {
            bb[number - 1] = answer
            setAllanswer(bb)
            aa[number - 1] = 'c'
            setCheck(aa)
            console.log('defined')
            const Index2 = aa?.[number]
            if (Index2 === undefined) {
                console.log("goodddd")
                setA('')
            }
            else {
                console.log('gppd2')
                setA(check[number])
            }
            setNumber(number=number + 1)
        }
    }
    else if (a === 'd') {
        let aa = [...check]
        const Index = aa?.[number - 1]
        let bb = [...allanswer]
        if (Index === undefined) {
            setAllanswer([...allanswer, answer])
            setAnswer('')
            aa[number - 1] = 'd'
            setCheck(aa)
            setNumber(number=number + 1)
            console.log('if index is undefined')
            setA('')
        }
        else {
            bb[number - 1] = answer
            setAllanswer(bb)
            aa[number - 1] = 'd'
            setCheck(aa)
            console.log('defined')
            const Index2 = aa?.[number]
            if (Index2 === undefined) {
                console.log("goodddd")
                setA('')
            }
            else {
                console.log('gppd2')
                setA(check[number])
            }
            setNumber(number=number + 1)
        }
    }
    else{
        if (a!==''){
        let aa = [...check]
        const Index = aa?.[number - 1]
        let bb = [...allanswer]
        if (Index === undefined) {
            setAllanswer([...allanswer, answer])
            setAnswer('')
            aa[number - 1] = 'n'
            setCheck(aa)
            setNumber(number=number + 1)
            console.log('if index is undefined')
            setA('')
        }
        else {
            bb[number - 1] = ''
            setAllanswer(bb)
            aa[number - 1] = 'n'
            setCheck(aa)
            console.log('defined')
            const Index2 = aa?.[number]
            if (Index2 === undefined) {
                console.log("goodddd")
                setA('')
            }
            else {
                console.log('gppd2')
                setA(check[number])
            }
            setNumber(number=number + 1)
        }}
    }
}

const back=(setNumber,number,setAnswer,allanswer,setA,check)=>{
    if (number!==1){
    console.log(allanswer)
    console.log(check)
    // console.log(number)
    setNumber(number=number - 1)
    // console.log(number)
    setAnswer(allanswer[number - 1])
    if (check[number - 1] === 'a') {

        setA('a')

    }
    else if (check[number - 1] === 'b') {

        setA('b')
    }
    else if (check[number - 1] === 'c') {

        setA('c')
    }
    else if (check[number - 1] === 'd') {

        setA('d')
    }
    else{
        setA('n')
    }
}

}


const next=(check,number,allanswer,answer,setAnswer,setCheck,setNumber,setA,setAllanswer)=>{
    let aa = [...check]
    const Index = aa?.[number - 1]
    let bb = [...allanswer]
    if (Index === undefined) {
        setAllanswer([...allanswer,''])
        setAnswer('')
        aa[number - 1] = 'n'
        setCheck(aa)
        setNumber(number=number + 1)
        console.log('if index is undefined')
        setA('')
    }
    else {
        setAnswer(allanswer[number])
        setA(setCheck[number])
        // if(answer===''){        bb[number - 1] =''
        // setAllanswer(bb)
        // aa[number - 1] = 'n'
        // setCheck(aa)}

        // bb[number - 1] = ''
        // setAllanswer(bb)
        // aa[number - 1] = 'n'
        // setCheck(aa)
        console.log('defined')
        const Index2 = aa?.[number]
        if (Index2 === undefined) {
            console.log("goodddd")
            setA('')
        }
        else {
            console.log('gppd2')
            setA(check[number])
        }
        setNumber(number=number + 1)
    }
}

export { Takequiz }


