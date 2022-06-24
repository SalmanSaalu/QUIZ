import React, { useState, useContext } from 'react'
import '../Home/Home.css'
import { UserContext } from '../../App'
import { Link } from 'react-router-dom'
function Addquestion() {
    const [addqst, setAddqst] = useState([1])
    const {containquestion, setContainquestion, add, setAdd, addingquestion,setAddingquestion,option1,setOption1,option2,setOption2,option3,setOption3,option4,setOption4,
        containoption1,setContainoption1,containoption2,setContainoption2,containoption3,setContainoption3,containoption4,setContainoption4 } = useContext(UserContext);
    // console.log(addqst)
    
    return (

        <div>

            <ul>
                <li>your quiz code number is C2087</li>

            </ul>
            
            {addqst.map((obj) => 
            {

            
                return (
                    
                    <div>
                    <div style={{ float:'left',paddingLeft: '20px',width:"50%" }}>
                        
                        <p><label >{obj}question</label></p>
                        <textarea onChange={(e)=>ValueQuestion(setAddingquestion,e,obj)} value={addingquestion}  name="w3review" rows="4" cols="50" required ></textarea><br />
                        <label >option 1 :</label>
                        <input onChange={(e)=>ValueOption1(setOption1,e,obj)} value={option1}  type="text" required/><br />
                        <label >option 2 :</label>
                        <input onChange={(e)=>ValueOption2(setOption2,e,obj)} value={option2}  type="text" required/><br />
                        <label >option 3 :</label>
                        <input onChange={(e)=>ValueOption3(setOption3,e,obj)} value={option3}  type="text" required/><br />
                        <label >option 4 :</label>
                        <input onChange={(e)=>ValueOption4(setOption4,e,obj)} value={option4}  type="text" required/><br /><br />
                        <button onClick={(e)=>console.log(obj)}>change</button>
                        <button onClick={(e)=>{
                            if(addingquestion && option1 && option2 && option3 && option4 !==''){
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
                                if (containquestion[obj-1] && addingquestion !==''){
                                    let aa=containquestion
                                    aa[obj-1]=addingquestion
                                    setContainquestion(aa)
                                    setAddingquestion('')
                                }
                                if (containoption1[obj-1] && option1!==''){
                                    let aa=containoption1
                                    aa[obj-1]=option1
                                    setContainoption1(aa)
                                    setOption1('')
                                }
                                if (containoption2[obj-1] && option2!==''){
                                    let aa=containoption2
                                    aa[obj-1]=option2
                                    setContainoption2(aa)
                                    setOption2('')
                                }
                                if (containoption3[obj-1] && option3!==''){
                                    let aa=containoption3
                                    aa[obj-1]=option3
                                    setContainoption3(aa)
                                    setOption3('')
                                }
                                if (containoption4[obj-1] && option4!==''){
                                    let aa=containoption4
                                    aa[obj-1]=option4
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
                            if(containquestion[obj-1] && containoption1[obj-1] && containoption2[obj-1] && containoption3[obj-1] && containoption4[obj-1] !== undefined)
                            {
                            setAdd(add => {
                                setAddqst([...addqst, add + 1])
                                console.log(add)
                                return add + 1
                            })}

                        }}>add another question</button>
                    </div>
                    {containquestion[obj-1]?
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
                    </div>
                    :console.log(containquestion[obj-1])}
                    </div>
            )
             
            })}
            
            
            <button type='submit' >finished</button>
                     
        </div>
                
    )
}

const ValueQuestion=(setAddingquestion,e,obj)=>{
    setAddingquestion(e.target.value)
    
    
}
const ValueOption1=(setOption1,e,obj)=>{
    setOption1(e.target.value)
    
}
const ValueOption2=(setOption2,e,obj)=>{
    setOption2(e.target.value)
   
}
const ValueOption3=(setOption3,e,obj)=>{
    setOption3(e.target.value)
  
}
const ValueOption4=(setOption4,e,obj)=>{
    setOption4(e.target.value)
    
}

export { Addquestion }