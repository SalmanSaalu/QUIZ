import React,{ useEffect, useState,useContext } from 'react'
import '../Home/Home.css'
import './Addedqst.css'
import { UserContext } from '../../App'

function Addqst(){
    const {codecheck,setCodecheck}=useContext(UserContext)
    const {username}=useContext(UserContext)
    const [stp,setStp]=useState('')
    const [noanswer,setNoanswer]=useState('')
    const [addedqst,setAddedqst]=useState([])
    const [addedans,setAddedans]=useState([])
    const [fetchallqst,setFetchallqst]=useState([])
    const [validate,setValidate]=useState([])
    const [vld,setVld]=useState("")
    const [ btnans, setBtnans]=useState('')
    
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
                        setAddedans([])
                  
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
                                // console.log(stp)
                            }
                            else{
                                // console.log(data)
                            setAddedqst(data)
                            // console.log(addedqst)
                            myFunction()
                        }
                        })}} className="dropbtn">added questions</li>

                  <div id="myDropdown" className="dropdown-content">
                  {addedqst ? 
                      addedqst.map((obj,i)=> <a key={i} onClick={()=>{
                        setValidate([])
                        setBtnans('')
                        let databody = { "questioncode": obj }

                        return fetch('/getallquestion', {
                            method: 'POST',
                            body: JSON.stringify(databody),
                            headers: {
                                'Content-Type': 'application/json'
                            },})
                            .then(res => {
                                //    console.log(res)
                                return res.json()
                            })
                            .then((data) => {
                                
                                setFetchallqst(data)
                                // console.log(fetchallqst)
                                })}

                      }>{obj} </a>):""}

                    {addedans?addedans.map((obj,i)=> <a key={i} onClick={()=>{
                                               
                                                let databody = { "questioncode": obj,"username":username }

                                                        return fetch('/validateanswer', {
                                                            method: 'POST',
                                                            body: JSON.stringify(databody),
                                                            headers: {
                                                                'Content-Type': 'application/json'
                                                            },})
                    .then(res => {
                        //    console.log(res)
                        return res.json()
                    })
                    .then((data) => {
                        // console.log(data)
                        setBtnans('')
                        setValidate(data)
                     
                            let databody = { "questioncode": obj }

                            return fetch('/getallquestion', {
                                method: 'POST',
                                body: JSON.stringify(databody),
                                headers: {
                                    'Content-Type': 'application/json'
                                },})
                                .then(res => {
                                    //    console.log(res)
                                    return res.json()
                                })
                                .then((data) => {
                                    
                                    setFetchallqst(data)
                                               
                            })
                        })


                    }}>{obj}</a>):''}
                    </div>
            

                <li onClick={()=>{
                    setAddedqst([])
                   
                    //  setVld('answers')
                    let databody = {

                       "username": username

                   }

                   return fetch('/allexistanswers', {
                       method: 'POST',
                       body: JSON.stringify(databody),
                       headers: {
                           'Content-Type': 'application/json'
                       }, })
                       .then(res =>  res.json()
                       )
                       .then((data) => {
                           if(data==='no questions answered'){
                               // console.log(data)
                               setNoanswer('no questions answered')
                               console.log(noanswer)
                           }
                           else{
                               // console.log(data)
                           setAddedans(data)
                           // console.log(addedqst)
                           myFunction()
                       }
                       })
               }} className="dropbtn">Answers</li>
            </ul>

            {validate?.[0] ?     
            <div>
                <button style={{marginLeft:'80%'}} onClick={()=>{
                    var a=0
                     {fetchallqst.map((obj,i)=>{
                        console.log('outer')
                        if(obj.answer===validate[0].answers[i]){
                            // setBtnans([...btnans,1])
                            a=a+1
                            
                        }
                    // console.log(a)
                    setBtnans(a)

                     })}
                    // {obj.answer===validate[0].answers[i] ?  :""}
                        }
                }>my mark</button>
               
               
            </div>
            :""}

            {btnans!=="" ? btnans :""}




            <div>
                    {
                    fetchallqst.map((obj,i)=>{
                    
                        return (
                        <div key={i} style={{paddingLeft:'15%'}}>

                            <h4>{i+1}.{obj.question}</h4>
                            <label>option 1</label> :{obj.option1}<br/>
                            
                            <label>option 2</label> :{obj.option2}<br/>
                            <label>option 3</label> :{obj.option3}<br/>
                            
                            <label>option 4</label> :{obj.option4}<br/>
                            <label>answer</label> :{obj.answer}<br/>
                    
                                {validate?.[0] ? 
                                <div>
                                    <label>your option</label> :{validate[0].answers[i]}<br/><br/>  
                                    {obj.answer===validate[0].answers[i] ?  
                                        <div>
                                            {/* <div>
                                            
                                            </div> */}
                                            <div >   
                                            <svg xmlns="http://www.w3.org/2000/svg" color='green' width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                            </svg>
                                            </div>
                                        </div>
                                     : validate[0].answers[i] === '' ? 
                                        <div style={{marginTop: '-10px',
                                            background: 'yellow',
                                            width: '130px',
                                            borderRadius: '20px',
                                            fontFamily: 'monospace',
                                            paddingLeft: '39px'}}>NOT ANSWERED
                                        </div>
                                 
                                        :
                                        <div>       
                                            <svg xmlns="http://www.w3.org/2000/svg" color='red' width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                            </svg>
                                        </div>
                                         
                                    }
                                </div>
                               :"" }


                   
                                
                        </div>
                    )})}
            </div>

        </div>
        
    )
}

export {Addqst}

