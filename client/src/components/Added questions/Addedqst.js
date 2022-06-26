import React,{ useEffect, useState,useContext } from 'react'
import '../Home/Home.css'
import './Addedqst.css'
import { UserContext } from '../../App'

function Addqst(){
    const {username}=useContext(UserContext)
    const [stp,setStp]=useState('')
    const [addedqst,setAddedqst]=useState([])
    const [fetchallqst,setFetchallqst]=useState([])

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }


    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }


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
                            if(data==='question not added'){
                                // console.log(data)
                                setStp('questions not added')
                                console.log(stp)
                            }
                            else{
                                // console.log(data)
                            setAddedqst(data)
                            // console.log(addedqst)
                            myFunction()
                        }
                        })
                }} className="dropbtn">added questions</li>
                  <div id="myDropdown" className="dropdown-content">
                  {addedqst ? 
                      addedqst.map((obj,i)=> <a key={i} onClick={()=>{
                        
                        let databody = {

                            "questioncode": obj

                        }

                        return fetch('/getallquestion', {
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
                                
                                setFetchallqst(data)
                                })

                      }}>{obj} </a>):""}
                      
                    </div>
                <li>Answers</li>
            </ul>
            <div style={{textAlign:"center"}}>
                {stp==='' ? 
                
                fetchallqst.map((obj,i)=>{
                    return (
                <div key={i} style={{textAlign:"center"}}>
                    
                    <h4>{obj.question}</h4>
                    <label>option 1</label> :{obj.option1}<br/>
                    
                    <label>option 2</label> :{obj.option2}<br/>
                    <label>option 3</label> :{obj.option3}<br/>
                    
                    <label>option 4</label> :{obj.option4}<br/>
                    <label>answer</label> :{obj.answer}<br/>
                </div>)
                }) :
            stp}
                
                
            </div>
        </div>
        
    )
}

export {Addqst}

