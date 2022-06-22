
import React, { useState, useContext } from 'react'
import { UNSAFE_NavigationContext } from 'react-router-dom';
import { UserContext } from '../../App'
function Takequiz() {
    // const [answer,setAnswer]=useState('')
    // const [check,setCheck]=useState([])
    // const [a,setA]=useState('')

    // const [allanswer,setAllanswer]=useState([])
    // var [number,setNumber]=useState(1)
    var { number, setNumber, allanswer, setAllanswer, a, setA, check, setCheck, answer, setAnswer } = useContext(UserContext);
    // console.log(number)

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>QUESTIONS</h2><br />
            {number === 1 ?
                <div>

                    <h4 style={{ paddingLeft: '30px' }}>1.What is your name</h4>

                    <div style={{ paddingLeft: '30px' }}>
                        <input type="radio" name="name" checked={a === 'a'} value="salman" onChange={(e) => {
                            setAnswer(e.target.value)
                            setA("a")
                        }} />
                        <label >Salman</label><br />

                        <input type="radio" name="name" checked={a === 'b'} value="anas" onChange={(e) => {
                            setAnswer(e.target.value)
                            setA("b")
                        }} />
                        <label >anas</label><br />


                        <input type="radio" name="name" checked={a === 'c'} value="navaras" onChange={(e) => {
                            setAnswer(e.target.value)
                            setA("c")
                        }} />
                        <label >navaras</label><br />

                        <input type="radio" name="name" checked={a === 'd'} value="aswin" onChange={(e) => {
                            setAnswer(e.target.value)
                            setA("d")
                        }} />
                        <label >aswin</label><br />

                        <button  >Back</button>
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

                </div> : ""}

            {number === 2 ?
                <div>

                    <h4 style={{ paddingLeft: '30px' }}>2.What is your age</h4>

                    <div style={{ paddingLeft: '30px' }}>
                        <input type="radio" name="name" checked={a === 'a'} value="salman" onChange={(e) => {
                            setAnswer(e.target.value)
                            setA("a")
                        }} />
                        <label >Salman</label><br />

                        <input type="radio" name="name" checked={a === 'b'} value="anas" onChange={(e) => {
                            setAnswer(e.target.value)
                            setA("b")
                        }} />
                        <label >anas</label><br />


                        <input type="radio" name="name" checked={a === 'c'} value="navaras" onChange={(e) => {
                            setAnswer(e.target.value)
                            setA("c")
                        }} />
                        <label >navaras</label><br />

                        <input type="radio" name="name" checked={a === 'd'} value="aswin" onChange={(e) => {
                            setAnswer(e.target.value)
                            setA("d")
                        }} />
                        <label >aswin</label><br />
                        <button onClick={() =>back(setNumber,number,setAnswer,allanswer,setA,check) }>Back</button>
                        <button onClick={()=>{if(a!=='n') store(number, setNumber, allanswer, setAllanswer, a, setA, check, setCheck, answer, setAnswer)} }>submit</button>
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

                </div> : ""}

            {number === 3 ?
                <div>

                    <h4 style={{ paddingLeft: '30px' }}>3.What is your place</h4>

                    <div style={{ paddingLeft: '30px' }}>
                        <input type="radio" name="name" checked={a === 'a'} value="salman" onChange={(e) => {
                            setAnswer(e.target.value)
                            setA("a")
                        }} />
                        <label >Salman</label><br />

                        <input type="radio" name="name" checked={a === 'b'} value="anas" onChange={(e) => {
                            setAnswer(e.target.value)
                            setA("b")
                        }} />
                        <label >anas</label><br />


                        <input type="radio" name="name" checked={a === 'c'} value="navaras" onChange={(e) => {
                            setAnswer(e.target.value)
                            setA("c")
                        }} />
                        <label >navaras</label><br />

                        <input type="radio" name="name" checked={a === 'd'} value="aswin" onChange={(e) => {
                            setAnswer(e.target.value)
                            setA("d")
                        }} />
                        <label >aswin</label><br />
                        <button onClick={() => back(setNumber,number,setAnswer,allanswer,setA,check) }>Back</button>
                        <button onClick={() =>{if(a!=='n')  store(number, setNumber, allanswer, setAllanswer, a, setA, check, setCheck, answer, setAnswer)}} >submit</button>
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

                </div> : ""}
            {number === 4 ?
                <div>

                    <h4 style={{ paddingLeft: '30px' }}>4.What is your country</h4>

                    <div style={{ paddingLeft: '30px' }}>
                        <input type="radio" name="name" checked={a === 'a'} value="salman" onChange={(e) => {
                            setAnswer(e.target.value)
                            setA("a")
                        }} />
                        <label >Salman</label><br />

                        <input type="radio" name="name" checked={a === 'b'} value="anas" onChange={(e) => {
                            setAnswer(e.target.value)
                            setA("b")
                        }} />
                        <label >anas</label><br />


                        <input type="radio" name="name" checked={a === 'c'} value="navaras" onChange={(e) => {
                            setAnswer(e.target.value)
                            setA("c")
                        }} />
                        <label >navaras</label><br />

                        <input type="radio" name="name" checked={a === 'd'} value="aswin" onChange={(e) => {
                            setAnswer(e.target.value)
                            setA("d")
                        }} />
                        <label >aswin</label><br />
                        <button onClick={() =>back(setNumber,number,setAnswer,allanswer,setA,check) }>Back</button>
                            <button onClick={() => {if(a!=='n') store(number, setNumber, allanswer, setAllanswer, a, setA, check, setCheck, answer, setAnswer)} }>submit</button>

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

                </div> : ""}

            {/* {number ===5 ? 
            <div>
            
            <h4 style={{paddingLeft:'30px'}}>5.What is your hobby</h4>
            
                <div style={{paddingLeft:'30px'}}>
                <input type="radio"  name="name" value="salman"/>
                <label >Salman</label><br/>
                <input type="radio"  name="name" value="anas"  onChange={(e)=>setAllanswer([...allanswer,e.target.value])}/>
                <label >anas</label><br/>
                <input type="radio"  name="name" value="navaras" />
                <label >navaras</label><br/>
                <input type="radio"  name="name" value="aswin"/>
                <label >aswin</label><br/><br/>
                <button  onClick={()=>setNumber(number=number-1)} >Back</button>
                <button  onClick={()=>{setNumber(number=number+1)
                 console.log(allanswer)}} >Next</button>
                </div>
            
            </div>:""}  */}
                 <button onClick={(allAnswer)=>{
                 console.log(allAnswer)
                  }}>press</button>
        </div>
                                       
    )
}


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
        }
    }
}

const back=(setNumber,number,setAnswer,allanswer,setA,check)=>{
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
        setA('')
    }


}


const next=(check,number,allanswer,answer,setAnswer,setCheck,setNumber,setA,setAllanswer)=>{
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


