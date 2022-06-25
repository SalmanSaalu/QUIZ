import React, { useCallback, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from '../../App'
import './answer.css'
function Answer(props) {
    const [qstncodevalue, setQstncodevalue] = useState('')
    const navigate = useNavigate()
    const [paswd, setPaswd] = useState('')
    const { setQst } = useContext(UserContext)
    return (
        <div className='popup-box' >
            <div className="box" >
                <span className="close-icon" onClick={() => props.handleClose()}>x</span>
                <h4 style={{ textAlign: "center" }}>please enter the question code to start the exam</h4><br />
                <div style={{ textAlign: "center" }}>
                    <input type="text" name='questioncode' value={qstncodevalue} onChange={(e) => setQstncodevalue(e.target.value)
                    } /><br />
                    <button onClick={(e) => {

                        if (setQstncodevalue !== '') {
                            
                            // console.log(codecheck)
                            let databody = {

                                "questioncode": qstncodevalue

                            }

                            return fetch('/getquestion', {
                                method: 'POST',
                                body: JSON.stringify(databody),
                                headers: {
                                    'Content-Type': 'application/json'
                                },

                            })
                                .then(res => {
                                    //    console.log(res)
                                    return res.json()
                                })
                                .then((data) => {
                                    console.log(data)
                                    if (data.a === 'question code not match') {
                                        console.log('not matching')
                                        setPaswd('question code not match')
                                    }
                                    else {
                                        console.log('working')
                                        setQst(data)
                                        
                                        setQstncodevalue('')
                                        navigate('/takequiz')
                                    }
                                })
                        } else { console.log('not working') }

                    }}>confirm</button><br />
                    {paswd !== '' ? paswd : ""}
                </div>



            </div>
        </div>
    )
}

export { Answer }