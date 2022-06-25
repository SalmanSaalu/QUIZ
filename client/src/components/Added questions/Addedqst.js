import React,{ useEffect, useState,useContext } from 'react'
import '../Home/Home.css'
import { UserContext } from '../../App'

function Addqst(){
    const {username}=useContext(UserContext)
    const [stp,setStp]=useState('')
    const [addedqst,setAddedqst]=useState([])
    return(
        <div>
            <ul>
                <li onClick={()=>{
                     let databody = {

                        "username": username

                    }

                    return fetch('/allquestions', {
                        method: 'POST',
                        body: JSON.stringify(databody),
                        headers: {
                            'Content-Type': 'application/json'
                        },

                    })
                        .then(res =>  res.json()
                        )
                        .then((data) => {
                            if(data.a==='question not added'){
                                setStp('questions not added')
                            }
                            else{
                                // console.log(data)
                            setAddedqst(data)
                            // console.log(addedqst)
                        }
                        })
                }}>added questions</li>
                <li>Answers</li>
            </ul>
            {/* {stp!=='' ? stp : ""} */}
            {addedqst ? 
            addedqst.map((obj)=>obj.questioncode):""}
        </div>
        
    )
}

export {Addqst}