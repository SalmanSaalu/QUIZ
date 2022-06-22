
import React,{useState} from 'react'

function Takequiz(){
    const [answer,setAnswer]=useState('')
    const [check,setCheck]=useState([])
    const [a,setA]=useState('')

    const [allanswer,setAllanswer]=useState([])
    var [number,setNumber]=useState(1)
    return(
        <div>
            <h2 style={{textAlign:'center'}}>QUESTIONS</h2><br/>
            {number ===1 ? 
            <div>
            
            <h4 style={{paddingLeft:'30px'}}>1.What is your name</h4>
            
                <div style={{paddingLeft:'30px'}}>
                <input type="radio"  name="name"   checked={a==='a'} value="salman" onChange={(e)=>{
                        setAnswer(e.target.value)
                        setA("a")}}/>
                <label >Salman</label><br/>

                <input type="radio" name="name"  checked={a==='b'}  value="anas" onChange={(e)=>{
                    setAnswer(e.target.value)
                    setA("b") }}/>
                <label >anas</label><br/>

                
                <input type="radio"  name="name"   checked={a==='c'} value="navaras" onChange={(e)=>{
                        setAnswer(e.target.value)
                        setA("c")}}/>
                <label >navaras</label><br/>

                <input type="radio" name="name"  checked={a==='d'}  value="aswin" onChange={(e)=>{
                    setAnswer(e.target.value)
                    setA("d")}}/>
                <label >aswin</label><br/>

                <button  onClick={()=>setNumber(number=number-1)} >Back</button>
                <button  onClick={()=>{
                    
                    if(a === 'a'){
                        let aa=[...check]
                        const Index = aa?.[number-1]
                        let bb=[...allanswer]
                     if (Index===undefined)
                        {setAllanswer([...allanswer,answer])
                        setAnswer('')
                        aa[number-1]='a'
                        setCheck(aa)
                        setNumber(number=number+1)
                        console.log('if index is undefined')
                        setA('')}
                    else{
                        bb[number-1]=answer
                        setAllanswer(bb)
                        aa[number-1]='a'
                        setCheck(aa)
                        console.log('defined')
                        const Index2 = aa?.[number]
                           if(Index2===undefined){
                               console.log("goodddd")
                               setA('')
                           }
                           else{
                               console.log('gppd2')
                               setA(check[number])
                           }
                        setNumber(number=number+1)
                    }
                    }
                    else if(a === 'b'){
                        let aa=[...check]
                        const Index = aa?.[number-1]
                        let bb=[...allanswer]
                        if (Index===undefined)
                           {
                           setAllanswer([...allanswer,answer])
                           setAnswer('')
                           aa[number-1]='b'
                           setCheck(aa)
                           setNumber(number=number+1)
                           console.log('if index is undefined')
                           setA('')}
                       else{
                           bb[number-1]=answer
                           setAllanswer(bb)
                           aa[number-1]='b'
                           setCheck(aa)
                           console.log('defined')
                           const Index2 = aa?.[number]
                           if(Index2===undefined){
                               console.log("goodddd")
                               setA('')
                           }
                           else{
                               console.log('gppd2')
                               setA(check[number])
                           }
                           setNumber(number=number+1)
                       }
                    }
                    // else if(a === 'c'){
                        
                    //     let aa=[...check]
                    //     aa[number-1]='c'
                    //     setCheck(aa)
                    //     setNumber(number=number+1)
                    //     setA('')
                    // }
                    // else if(a === 'd'){
                        
                    //     let aa=[...check]
                    //     aa[number-1]='d'
                    //     setCheck(aa)
                    //     setNumber(number=number+1)
                    //     setA('')
                    // }
                    // console.log(allanswer)
                    }
                }>submit</button>
                <button onClick={()=>{
                     let aa=[...check]
                        aa[number-1]='n'
                        setCheck(aa)
                        setNumber(number=number+1)
                        setA('')} }>next</button>
                </div>
            
            </div>:""}
            
            {number ===2 ? 
            <div>
            
            <h4 style={{paddingLeft:'30px'}}>2.What is your age</h4>
            
            <div style={{paddingLeft:'30px'}}>
                <input type="radio"  name="name"   checked={a==='a'} value="salman" onChange={(e)=>{
                        setAnswer(e.target.value)
                        setA("a")}}/>
                <label >Salman</label><br/>

                <input type="radio" name="name"  checked={a==='b'}  value="anas" onChange={(e)=>{
                    setAnswer(e.target.value)
                    setA("b") }}/>
                <label >anas</label><br/>

                
                <input type="radio"  name="name"   checked={a==='c'} value="navaras" onChange={(e)=>{
                        setAnswer(e.target.value)
                        setA("c")}}/>
                <label >navaras</label><br/>

                <input type="radio" name="name"  checked={a==='d'}  value="aswin" onChange={(e)=>{
                    setAnswer(e.target.value)
                    setA("d")}}/>
                <label >aswin</label><br/>
                <button  onClick={()=>{
                    console.log(allanswer)
                    console.log(check)
                    setNumber(number=number-1)
                    setAnswer(allanswer[number-1])
                    if(check[number-1]==='a'){

                        setA('a')
                        
                    } 
                    else if(check[number-1]==='b'){

                        setA('b')
                    } 
                    else if(check[number-1]==='c'){

                        setA('c')
                    } 
                    else if(check[number-1]==='d'){

                        setA('d')
                    } 
                
                }}
                    >Back</button>
                <button  onClick={()=>{
                 if(a === 'a'){
                    let aa=[...check]
                    const Index = aa?.[number-1]
                    let bb=[...allanswer]
                 if (Index===undefined)
                    {setAllanswer([...allanswer,answer])
                    setAnswer('')
                    aa[number-1]='a'
                    setCheck(aa)
                    setNumber(number=number+1)
                    console.log('if index is undefined')
                    setA('')}
                else{
                        aa[number-1]='a'
                        bb[number-1]=answer
                        setAllanswer(bb)
                        setCheck(aa)
                        console.log('defined')
                        const Index2 = aa?.[number]
                        if(Index2===undefined){
                            console.log("goodddd")
                            setA('')
                        }
                        else{
                            console.log('gppd2')
                            setA(check[number])
                        }
                        setNumber(number=number+1)

                    }
                }
                else if(a === 'b'){
                    let aa=[...check]
                    const Index = aa?.[number-1]
                    let bb=[...allanswer]
                     if (Index===undefined)
                        {setAllanswer([...allanswer,answer])
                        setAnswer('')
                        aa[number-1]='b'
                        setCheck(aa)
                        setNumber(number=number+1)
                        console.log('if index is undefined')
                        setA('')}
                    else{
                        
                        bb[number-1]=answer
                        setAllanswer(bb)
                        aa[number-1]='b'
                        setCheck(aa)
                        console.log('defined')
                        const Index2 = aa?.[number]
                        if(Index2===undefined){
                            console.log("goodddd")
                            setA('')
                        }
                        else{
                            console.log('gppd2')
                            setA(check[number])
                        }
                        setNumber(number=number+1)
                    }
                }
                else if(a === 'c'){
                    
                    let aa=[...check]
                    aa[number-1]='c'
                    setCheck(aa)
                    setNumber(number=number+1)
                    setA('')
                }
                else if(a === 'd'){
                    
                    let aa=[...check]
                    aa[number-1]='d'
                    setCheck(aa)
                    setNumber(number=number+1)
                    setA('')
                }
                 console.log(allanswer)

                 console.log(check)}} >submit</button>
                  <button onClick={()=>{
                     let aa=[...check]
                        aa[number-1]='n'
                        setCheck(aa)
                        setNumber(number=number+1)
                        setA('')} }>next</button>
                </div>
            
            </div>:""}

            {number ===3 ? 
            <div>
            
            <h4 style={{paddingLeft:'30px'}}>3.What is your place</h4>
            
            <div style={{paddingLeft:'30px'}}>
                <input type="radio"  name="name"   checked={a==='a'} value="salman" onChange={(e)=>{
                        setAnswer(e.target.value)
                        setA("a")}}/>
                <label >Salman</label><br/>

                <input type="radio" name="name"  checked={a==='b'}  value="anas" onChange={(e)=>{
                    setAnswer(e.target.value)
                    setA("b") }}/>
                <label >anas</label><br/>

                
                <input type="radio"  name="name"   checked={a==='c'} value="navaras" onChange={(e)=>{
                        setAnswer(e.target.value)
                        setA("c")}}/>
                <label >navaras</label><br/>

                <input type="radio" name="name"  checked={a==='d'}  value="aswin" onChange={(e)=>{
                    setAnswer(e.target.value)
                    setA("d")}}/>
                <label >aswin</label><br/>
                <button  onClick={()=>{
                    console.log(allanswer)
                    console.log(check)

                    setNumber(number=number-1)
                    setAnswer(allanswer[number-1])
                    if(check[number-1]==='a'){

                        setA('a')
                        
                    } 
                    else if(check[number-1]==='b'){

                        setA('b')
                    } 
                    else if(check[number-1]==='c'){

                        setA('c')
                    } 
                    else if(check[number-1]==='d'){

                        setA('d')
                    } 
                
                }}
                    >Back</button>
                <button  onClick={()=>{
                 if(a === 'a'){
                        
                    let aa=[...check]
                    aa[number-1]='a'
                    setCheck(aa)
                    setNumber(number=number+1)
                    setA('')
                }
                else if(a === 'b'){
                    
                    let aa=[...check]
                    aa[number-1]='b'
                    setCheck(aa)
                    setNumber(number=number+1)
                    setA('')
                }
                else if(a === 'c'){
                    
                    let aa=[...check]
                    aa[number-1]='c'
                    setCheck(aa)
                    setNumber(number=number+1)
                    setA('')
                }
                else if(a === 'd'){
                    
                    let aa=[...check]
                    aa[number-1]='d'
                    setCheck(aa)
                    setNumber(number=number+1)
                    setA('')
                }
                 console.log(allanswer)

                 console.log(check)}} >submit</button>
                  <button onClick={()=>{
                     let aa=[...check]
                        aa[number-1]='n'
                        setCheck(aa)
                        setNumber(number=number+1)
                        setA('')} }>next</button>
                </div>
            
            </div>:""}
            {number ===4 ? 
            <div>
            
            <h4 style={{paddingLeft:'30px'}}>4.What is your country</h4>
            
            <div style={{paddingLeft:'30px'}}>
                <input type="radio"  name="name"   checked={a==='a'} value="salman" onChange={(e)=>{
                        setAnswer(e.target.value)
                        setA("a")}}/>
                <label >Salman</label><br/>

                <input type="radio" name="name"  checked={a==='b'}  value="anas" onChange={(e)=>{
                    setAnswer(e.target.value)
                    setA("b") }}/>
                <label >anas</label><br/>

                
                <input type="radio"  name="name"   checked={a==='c'} value="navaras" onChange={(e)=>{
                        setAnswer(e.target.value)
                        setA("c")}}/>
                <label >navaras</label><br/>

                <input type="radio" name="name"  checked={a==='d'}  value="aswin" onChange={(e)=>{
                    setAnswer(e.target.value)
                    setA("d")}}/>
                <label >aswin</label><br/>
                <button  onClick={()=>{
                    console.log(allanswer)
                    console.log(check)
                    setNumber(number=number-1)
                    if(check[number-1]==='a'){

                        setA('a')
                        
                    } 
                    else if(check[number-1]==='b'){

                        setA('b')
                    } 
                    else if(check[number-1]==='c'){

                        setA('c')
                    } 
                    else if(check[number-1]==='d'){

                        setA('d')
                    } 
                
                }}
                    >Back</button>
                <button  onClick={()=>{
                 if(a === 'a'){
                        
                    let aa=[...check]
                    aa[number-1]='a'
                    setCheck(aa)
                    setNumber(number=number+1)
                    setA('')
                }
                else if(a === 'b'){
                    
                    let aa=[...check]
                    aa[number-1]='b'
                    setCheck(aa)
                    setNumber(number=number+1)
                    setA('')
                }
                else if(a === 'c'){
                    
                    let aa=[...check]
                    aa[number-1]='c'
                    setCheck(aa)
                    setNumber(number=number+1)
                    setA('')
                }
                else if(a === 'd'){
                    
                    let aa=[...check]
                    aa[number-1]='d'
                    setCheck(aa)
                    setNumber(number=number+1)
                    setA('')
                }
                 console.log(allanswer)

                 console.log(check)}} >submit</button>
                  <button onClick={()=>{
                     let aa=[...check]
                     const Index = aa?.[number-1]
                     if (Index===undefined)
                        {aa[number-1]='n'
                        setCheck(aa)
                        setNumber(number=number+1)
                        console.log('if index is undefined')
                        setA('')}
                    else{
                        console.log('defined')
                        setNumber(number=number+1)
                    }} }>next</button>
                </div>
            
            </div>:""}

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
            
        </div>
    )
}

export {Takequiz}


