import React, { useState, useContext, useEffect } from 'react'
import '../Home/Home.css'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'
import { Link } from 'react-router-dom'
var rough=''
function Addquestion() {
    const [addqst, setAddqst] = useState([1])
    const [number,setNumber]=useState(1)
    const {username,containquestion, setContainquestion, add, setAdd, addingquestion,setAddingquestion,option1,setOption1,option2,setOption2,option3,setOption3,option4,setOption4,
        containoption1,setContainoption1,containoption2,setContainoption2,containoption3,setContainoption3,containoption4,setContainoption4,demoanswer,setDemoanswer,containanswer,setContainanswer } = useContext(UserContext);
    // console.log(addqst)
    const navigate=useNavigate()
 
    // console.log(typeof(stp))
    

    const aaa=(Math.floor(Math.random() *100000))
    const rndom="CY"+aaa
     
    return (

        <div>

            <ul>
                <li>your quiz code number is {rndom}</li>

            </ul>
            

                    
                    <div>
                    <div style={{ paddingLeft: '20px' }}>
                        
                        <p><label >{number}question</label></p>
                        <textarea onChange={(e)=>ValueQuestion(setAddingquestion,e,number)} value={addingquestion}  name="w3review" rows="4" cols="50" required ></textarea><br />
                        <label >option 1 :</label>
                        {demoanswer === option1 && option1!==""? <input onChange={(e)=>ValueOption1(setOption1,e,number)} value={option1}  type="text" required readOnly/>:
                        <input onChange={(e)=>ValueOption1(setOption1,e,number)} value={option1}  type="text" required/>}

                        <br/><label >option 2 :</label>
                        {demoanswer === option2 && option2!==""?<input onChange={(e)=>ValueOption2(setOption2,e,number)} value={option2}  type="text" required readOnly/>:
                        <input onChange={(e)=>ValueOption2(setOption2,e,number)} value={option2}  type="text" required/>}

                        <br /><label >option 3 :</label>
                         {demoanswer === option3 && option3!==""?<input onChange={(e)=>ValueOption3(setOption3,e,number)} value={option3}  type="text" required readOnly/>:
                         <input onChange={(e)=>ValueOption3(setOption3,e,number)} value={option3}  type="text" required/>}

                        <br /><label >option 4 :</label>
                         {demoanswer === option4 && option4!==""?<input onChange={(e)=>ValueOption4(setOption4,e,number)} value={option4}  type="text" required readOnly/>:
                         <input onChange={(e)=>ValueOption4(setOption4,e,number)} value={option4}  type="text" required/>}

                        <br /><label >answer :</label>
                        <select id='w' onChange={()=>ValueOption5(setDemoanswer)}>
                            <option value=" "></option>
                            {option1!==''  ? <option value={option1} >option1</option> :""}
                            {option2!==''  ? <option value={option2} >option2</option>:""}
                            {option3!==''  ? <option value={option3} >option3</option>:""}
                            {option4!==''  ? <option value={option4} >option4</option>:""}
                            
                        </select>
                        {/* <input onChange={(e)=>ValueOption5(setDemoanswer,e,number)} value={demoanswer}  type="text" required/><br /> */}
                        <button onClick={(e)=>{
                            if (number!==1){
                                console.log('ooo')
                         setNumber(number=>{
                             return number-1})
                             setAddingquestion('')
                             setOption1('')
                             setOption2('')
                             setOption3('')
                             setOption4('')
                             setDemoanswer('')}}}>back</button>
                        <button onClick={(e)=>{
                            
                            if((addingquestion && option1 && option2 && option3 && option4 && demoanswer !=='')){
                                // console.log('eeeeeee')
                                if(containquestion[number-1] && containoption1[number-1] && containoption2[number-1] && containoption3[number-1] && containoption4[number-1] && containanswer[number-1]) {
                                    if (containquestion[number-1] && addingquestion !==''){
                                        let aa=containquestion
                                        aa[number-1]=addingquestion
                                        setContainquestion(aa)
                                        setAddingquestion('')
                                    }
                                    if (containoption1[number-1] && option1!==''){
                                        let aa=containoption1
                                        aa[number-1]=option1
                                        setContainoption1(aa)
                                        setOption1('')
                                    }
                                    if (containoption2[number-1] && option2!==''){
                                        let aa=containoption2
                                        aa[number-1]=option2
                                        setContainoption2(aa)
                                        setOption2('')
                                    }
                                    if (containoption3[number-1] && option3!==''){
                                        let aa=containoption3
                                        aa[number-1]=option3
                                        setContainoption3(aa)
                                        setOption3('')
                                    }
                                    if (containoption4[number-1] && option4!==''){
                                        let aa=containoption4
                                        aa[number-1]=option4
                                        setContainoption4(aa)
                                        setOption4('')
                                    }
                                    if (containanswer[number-1] && demoanswer!==''){
                                        let aa=containanswer
                                        aa[number-1]=demoanswer
                                        setContainanswer(aa)
                                        setDemoanswer('')
                                    }
                                }

                               
                                else{setContainquestion([...containquestion,addingquestion])
                                setContainoption1([...containoption1,option1])
                                setContainoption2([...containoption2,option2])
                                setContainoption3([...containoption3,option3])
                                setContainoption4([...containoption4,option4])
                                setContainanswer([...containanswer,demoanswer])
                                console.log(containquestion)
                                setAddingquestion('')
                                setOption1('')
                                setOption2('')
                                setOption3('')
                                setOption4('')
                                setDemoanswer('')}
                            }
                            else{
                                if (containquestion[number-1] && addingquestion !==''){
                                    let aa=containquestion
                                    aa[number-1]=addingquestion
                                    setContainquestion(aa)
                                    setAddingquestion('')
                                }
                                if (containoption1[number-1] && option1!==''){
                                    let aa=containoption1
                                    aa[number-1]=option1
                                    setContainoption1(aa)
                                    setOption1('')
                                }
                                if (containoption2[number-1] && option2!==''){
                                    let aa=containoption2
                                    aa[number-1]=option2
                                    setContainoption2(aa)
                                    setOption2('')
                                }
                                if (containoption3[number-1] && option3!==''){
                                    let aa=containoption3
                                    aa[number-1]=option3
                                    setContainoption3(aa)
                                    setOption3('')
                                }
                                if (containoption4[number-1] && option4!==''){
                                    let aa=containoption4
                                    aa[number-1]=option4
                                    setContainoption4(aa)
                                    setOption4('')
                                }
                                if (containanswer[number-1] && demoanswer!==''){
                                    let aa=containanswer
                                    aa[number-1]=demoanswer
                                    setContainanswer(aa)
                                    setDemoanswer('')
                                }
                                // if(addingquestion!=''){

                                // }
                                console.log("in else \n"+containquestion)
                                // console.log('not working')
                                
                            }
                        }}>submit</button>
                        <button onClick={() => {
                            if(containquestion[number-1] && containoption1[number-1] && containoption2[number-1] && containoption3[number-1] && containoption4[number-1] && containanswer[number-1]!== undefined)
                            {console.log('working')
                            setNumber(number=>{
                                return number+1
                            })
                            setAdd(add => {
                                setAddqst([...addqst, add + 1])
                                return add + 1
                            })
                            setAddingquestion('')
                            setOption1('')
                            setOption2('')
                            setOption3('')
                            setOption4('')
                            setDemoanswer('')}

                        }}>add another question</button>

                    </div>
                  

            
                    {addqst.map((obj) => containquestion?.[obj-1]? 
                        // console.log('woil')
                        // containquestion?.[obj-1]?  
                          
                    <div style={{float:'left', paddingRight: '20px' }}>
                    <p><label >{obj}question</label></p>
                    <textarea  value={containquestion[obj-1]}  name="w3review" rows="4" cols="50" required readOnly ></textarea><br />
                        <label >option 1 :</label>
                        <input  value={containoption1[obj-1]}  type="text" required readOnly/><br />
                        <label >option 2 :</label>
                        <input  value={containoption2[obj-1]}  type="text" required readOnly/><br />
                        <label >option 3 :</label>
                        <input  value={containoption3[obj-1]}  type="text" required readOnly/><br />
                        <label >option 4 :</label>
                        <input value={containoption4[obj-1]}  type="text" required readOnly/><br />
                        <label >answer</label>
                        <input  value={containanswer[obj-1]}  type="text" required readOnly/><br />
                    </div>:""
                    )}
                    </div>
            
             
          
            
            
                    <button type="submit" className="signupbtn" onClick={(e)=>{
                            e.preventDefault()
                            // console.log("1")
                            if(containquestion.length===containanswer.length&&containoption1.length===containoption2.length&&containoption3.length===containoption4.length){
                                addqst.map((obj)=>{
                                    // console.log(obj)
                                
                                let databody = {
                                        "number": obj,
                                        "question": containquestion[obj-1],
                                        "option1":containoption1[obj-1],
                                        "option2":containoption2[obj-1],
                                        "option3":containoption3[obj-1],
                                        "option4":containoption4[obj-1],
                                        "answer":containanswer[obj-1],
                                        "questioncode":rndom,
                                        "username":username
                                        
                                    }
                                    console.log(databody) 
                                    console.log("2")
                                    return fetch('/question', {
                                        method: 'POST',
                                        body: JSON.stringify(databody),
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        
                                    })
                                }) 
                            
                            // .then(res => {res.json()})
                            setAddingquestion('')
                            setOption1('')
                            setOption2('')
                            setOption3('')
                            setOption4('')
                            setDemoanswer('')
                            setContainquestion([])
                            setContainoption1([])
                            setContainoption2([])
                            setContainoption3([])
                            setContainoption4([])
                            setContainanswer([])
                            setAddqst([1])
                            setAdd(1)
                            setNumber(1)
                            navigate('/')

                        }
                        else{console.log('values are not equal')
                        console.log(containanswer.length,containoption1.length,containoption2.length,containoption3.length,containoption4.length,containquestion.length)
                        // console.log(1===1===1)
                    console.log(typeof(containanswer.length))}}
                        
                        
                    }>finish</button>
                     
        </div>
                
    )
}

const ValueQuestion=(setAddingquestion,e)=>{
    setAddingquestion(e.target.value)
    
    
}
const ValueOption1=(setOption1,e)=>{
    setOption1(e.target.value)
    
}
const ValueOption2=(setOption2,e)=>{
    setOption2(e.target.value)
   
}
const ValueOption3=(setOption3,e)=>{
    setOption3(e.target.value)
  
}
const ValueOption4=(setOption4,e)=>{
    setOption4(e.target.value)
    
}
function ValueOption5(setDemoanswer){
    var d=document.getElementById('w').value
    console.log(d)
    setDemoanswer(d)
    
    // a=
    // const b=el.value;
    //  console.log(b)
    // setDemoanswer(value)
}
export { Addquestion }