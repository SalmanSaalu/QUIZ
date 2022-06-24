import React, { useState, useContext, useEffect } from 'react'
import '../Home/Home.css'
import { UserContext } from '../../App'
import { Link } from 'react-router-dom'
function Addquestion() {
    const [addqst, setAddqst] = useState([1])
    const [number,setNumber]=useState(1)
    const {containquestion, setContainquestion, add, setAdd, addingquestion,setAddingquestion,option1,setOption1,option2,setOption2,option3,setOption3,option4,setOption4,
        containoption1,setContainoption1,containoption2,setContainoption2,containoption3,setContainoption3,containoption4,setContainoption4 } = useContext(UserContext);
    // console.log(addqst)

    return (

        <div>

            <ul>
                <li>your quiz code number is C2087</li>

            </ul>
            

                    
                    <div>
                    <div style={{ float:'left',paddingLeft: '20px',width:"50%" }}>
                        
                        <p><label >{number}question</label></p>
                        <textarea onChange={(e)=>ValueQuestion(setAddingquestion,e,number)} value={addingquestion}  name="w3review" rows="4" cols="50" required ></textarea><br />
                        <label >option 1 :</label>
                        <input onChange={(e)=>ValueOption1(setOption1,e,number)} value={option1}  type="text" required/><br />
                        <label >option 2 :</label>
                        <input onChange={(e)=>ValueOption2(setOption2,e,number)} value={option2}  type="text" required/><br />
                        <label >option 3 :</label>
                        <input onChange={(e)=>ValueOption3(setOption3,e,number)} value={option3}  type="text" required/><br />
                        <label >option 4 :</label>
                        <input onChange={(e)=>ValueOption4(setOption4,e,number)} value={option4}  type="text" required/><br /><br />
                        <button onClick={(e)=>{
                         setNumber(number=>{
                             return number-1})
                             setAddingquestion('')
                             setOption1('')
                             setOption2('')
                             setOption3('')
                             setOption4('')}}>back</button>
                        <button onClick={(e)=>{
                            if((addingquestion && option1 && option2 && option3 && option4 !=='')&&(containquestion[number-1] && containoption1[number-1] && containoption2[number-1] && containoption3[number-1] && containoption4[number-1]) ){
                                setContainquestion([...containquestion,addingquestion])
                                setContainoption1([...containoption1,option1])
                                setContainoption2([...containoption2,option2])
                                setContainoption3([...containoption3,option3])
                                setContainoption4([...containoption4,option4])
                                console.log(containquestion)
                                setAddingquestion('')
                                setOption1('')
                                setOption2('')
                                setOption3('')
                                setOption4('')
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
                                // if(addingquestion!=''){

                                // }
                                console.log("in else \n"+containquestion)
                                // console.log('not working')
                                
                            }
                        }}>submit</button>
                        <button onClick={() => {
                            if(containquestion[number-1] && containoption1[number-1] && containoption2[number-1] && containoption3[number-1] && containoption4[number-1] !== undefined)
                            {console.log('working')
                            setNumber(number=>{
                                return number+1
                            })
                            setAdd(add => {
                                setAddqst([...addqst, add + 1])
                                return add + 1
                            })}

                        }}>add another question</button>

                    </div>
                  

            
                    {addqst.map((obj) => containquestion?.[obj-1]? 
                        // console.log('woil')
                        // containquestion?.[obj-1]?  
                          
                    <div style={{float:'right', paddingRight: '20px' }}>
                    <p><label >{obj}question</label></p>
                    <textarea  value={containquestion[obj-1]}  name="w3review" rows="4" cols="50" required readOnly ></textarea><br />
                        <label >option 1 :</label>
                        <input  value={containoption1[obj-1]}  type="text" required readOnly/><br />
                        <label >option 2 :</label>
                        <input  value={containoption2[obj-1]}  type="text" required readOnly/><br />
                        <label >option 3 :</label>
                        <input  value={containoption3[obj-1]}  type="text" required readOnly/><br />
                        <label >option 4 :</label>
                        <input value={containoption4[obj-1]}  type="text" required readOnly/><br /><br />
                    </div>:""
                    )}
                    </div>
            
             
          
            
            
            <button type='submit' >finished</button>
                     
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

export { Addquestion }