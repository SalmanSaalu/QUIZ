
import React,{useState} from 'react'

function Takequiz(){
    const [answer,setAnswer]=useState('')
    const [allanswer,setAllanswer]=useState([])
    var [number,setNumber]=useState(1)
    return(
        <div>
            <h2 style={{textAlign:'center'}}>QUESTIONS</h2><br/>
            {number ===1 ? 
            <div>
            
            <h4 style={{paddingLeft:'30px'}}>1.What is your name</h4>
            
                <div style={{paddingLeft:'30px'}}>
                <input type="radio"  name="name" value="salman" onChange={(e)=>setAllanswer([...allanswer,e.target.value])}/>
                <label >Salman</label><br/>
                <input type="radio"  name="name" value="anas"/>
                <label >anas</label><br/>
                <input type="radio"  name="name" value="navaras" />
                <label >navaras</label><br/>
                <input type="radio"  name="name" value="aswin"/>
                <label>aswin</label><br/><br/>
                <button  onClick={()=>setNumber(number=number-1)} >Back</button>
                <button  onClick={()=>{setNumber(number=number+1)
                console.log(allanswer)}
                }>Next</button>
                </div>
            
            </div>:""}
            
            {number ===2 ? 
            <div>
            
            <h4 style={{paddingLeft:'30px'}}>2.What is your age</h4>
            
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
            
            </div>:""}
            
        </div>
    )
}

export {Takequiz}