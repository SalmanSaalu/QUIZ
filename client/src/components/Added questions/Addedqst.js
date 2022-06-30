import React, { useEffect, useState, useContext } from 'react'
import '../Home/Home.css'
import './Addedqst.css'
import { UserContext } from '../../App'
import { ListUserAnswer } from '../ListUserAnswer/ListUserAnswer'

function Addqst() {
    // const {codecheck,setCodecheck}=useContext(UserContext)
    const { username } = useContext(UserContext)
    const [stp, setStp] = useState('')
    const [noanswer, setNoanswer] = useState('')
    const [addedqst, setAddedqst] = useState([])
    const [addedans, setAddedans] = useState([])
    const [fetchallqst, setFetchallqst] = useState([])
    const [validate, setValidate] = useState([])
    const [listuser, setListuser] = useState('')
    const [btnans, setBtnans] = useState('')
    const [btncheck, setBtncheck] = useState(0)

    //for listing answers
    const [listingquestion, setListingquestion] = useState([])
    const [listingans, setListingans] = useState([])
    const [onlyans, setOnlyans] = useState([])

    //for storing marks for users who attended particular quiz in amrklist/answerlist
    const [getqstmark,setGetqstmark]=useState([])
    const [getansmark,setGetansmark]=useState([])
    const [marklist,setMartlist]=useState([])
    console.log(getansmark)
    // console.log(onlyans)
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    function answerlist() {
        document.getElementById("listanswer").classList.toggle("show");

    }



    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            setListuser('')
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
         if(!event.target.matches('.dropbtn2')){
            {
                var dropdowns = document.getElementsByClassName("dropdown-listanswer");
                setListuser('')
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
         }
    }

    function boom() {

        var buttonElement = document.getElementById('button');
        {
            buttonElement.classList.toggle('selected');
        };
    }



    return (
        <div>
            <ul>
                <li onClick={() => {
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
                        .then(res => res.json()
                        )
                        .then((data) => {
                            if (data === 'question not added') {
                                // console.log(data)
                                setStp('questions not added')
                                // console.log(stp)
                            }
                            else {
                                // console.log(data)
                                setAddedqst(data)
                                // console.log(addedqst)
                                myFunction()
                            }
                        })
                }} className="dropbtn">Added Questions</li>

                <div id="myDropdown" className="dropdown-content">
                    {addedqst ?
                        addedqst.map((obj, i) => <a key={i} onClick={() => {
                            document.getElementById("target-1").className='value2 transform'
                            
                            setMartlist([])
                            setValidate([])
                            setBtnans('')
                            setOnlyans([])
                            setGetansmark([])
                            setGetqstmark([])
                            
                            let databody = { "questioncode": obj }

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
                                    // console.log(fetchallqst)
                                })
                        }

                        }>{obj} </a>) : ""}

                    {addedans ? addedans.map((obj, i) => <a key={i} onClick={() => {

                        document.getElementById("target-1").className='value2 transform'
                        let databody = { "questioncode": obj, "username": username }

                        return fetch('/validateanswer', {
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
                                // console.log(data)
                                setBtncheck(0)
                                setBtnans('')
                                setValidate(data)
                                setOnlyans([])
                                setGetansmark([])
                                setGetqstmark([])
                                setMartlist([])
                                let databody = { "questioncode": obj }

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
                                        // console.log(fetchallqst)
                                    })
                            })


                    }}>{obj}</a>) : ''}
                </div>


                <li onClick={() => {
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
                        },
                    })
                        .then(res => res.json()
                        )
                        .then((data) => {
                            if (data === 'no questions answered') {
                                // console.log(data)
                                setNoanswer('no questions answered')
                                console.log(noanswer)
                            }
                            else {
                                // console.log(data)
                                setAddedans(data)
                                // console.log(addedqst)
                                myFunction()
                            }
                        })
                }} className="dropbtn"> My Answers</li>



                <li style={{ cursor: "pointer" }} onClick={() => {
                    setOnlyans([])
                    // setListuser('user')
                    answerlist()
                    setFetchallqst([])
                    setValidate([])
                   
                    let databody = { "username": username }

                    return fetch('/listinguserqst', {
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
                            if (data !== 'no answer') {
                                setListingquestion(data)
                                return fetch('/listinguserans', {
                                    method: 'GET',

                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                })
                                    .then(res => {
                                        //    console.log(res)
                                        return res.json()
                                    })
                                    .then((data2) => {
                                        setListingans(data2)
                                        // console.log(data)
                                        // console.log(data2)
                                        // console.log(listingans)
                                        // console.log(listingquestion)

                                        let d = [];

                                        data.map((obj) => {
                                            // console.log('outer')
                                            data2.map((obj2) => {
                                                if (obj === obj2.questioncode) {
                                                    // console.log('obj2 '+obj2.questioncode)
                                                    // console.log('obj '+obj)
                                                    // console.log(obj)
                                                    d = [...d, obj]
                                                }
                                            })
                                        })



                                        setOnlyans([...d])
                                        setOnlyans((onlyans)=>[... new Set(onlyans)])
                                        
                                     

                                    })
                            }
                        })

                }} className='dropbtn2'>Answer List</li>
            </ul>


            {validate?.[0] ?
                <div>

                    <button className='icon' id="button" style={{ float: 'right', height: '40px', width: '39px', borderRadius: '100px' }} onClick={() => {

                        // boom()
                        if (btncheck === 0) {
                            setBtncheck(1)
                            console.log(btncheck)
                        }
                        else if (btncheck === 1) {
                            setBtncheck(0)
                            console.log(btncheck)
                        }

                        boom()
                        document.getElementById('good').classList.toggle("transform-active")
                        // $("#good").click(function(){
                        //     // $(".transform").toggleClass("transform-active");
                        //  });

                        var a = 0
                        {
                            fetchallqst.map((obj, i) => {
                                console.log('outer')
                                if (obj.answer === validate[0].answers[i]) {
                                    // setBtnans([...btnans,1])
                                    a = a + 1

                                }
                                // console.log(a)
                                setBtnans(a)

                            })
                        }

                        // {obj.answer===validate[0].answers[i] ?  :""}
                    }
                    }>M</button>
                    <div id='good' className='value transform'><p className='markvalue ' style={{ marginTop: '6.8px', fontFamily: "cursive" }}>{btnans !== "" ? btncheck === 1 ? "MARK " + btnans : "" : ""}</p></div>


                </div>
                : ""}






            <div>
                {
                    fetchallqst.map((obj, i) => {

                        return (
                            <div key={i} style={{ paddingLeft: '15%' }}>

                                <h4>{i + 1}.{obj.question}</h4>
                                <label>option 1</label> :{obj.option1}<br />

                                <label>option 2</label> :{obj.option2}<br />
                                <label>option 3</label> :{obj.option3}<br />

                                <label>option 4</label> :{obj.option4}<br />
                                <label>answer</label> :{obj.answer}<br />

                                {validate?.[0] ?
                                    <div>
                                        <label>your option</label> :{validate[0].answers[i]}<br /><br />
                                        {obj.answer === validate[0].answers[i] ?
                                            <div>
                                                {/* <div>
                                            
                                            </div> */}
                                                <div >
                                                    <svg xmlns="http://www.w3.org/2000/svg" color='green' width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            : validate[0].answers[i] === '' ?
                                                <div style={{
                                                    marginTop: '-10px',
                                                    background: 'yellow',
                                                    width: '130px',
                                                    borderRadius: '20px',
                                                    fontFamily: 'monospace',
                                                    paddingLeft: '39px'
                                                }}>NOT ANSWERED
                                                </div>

                                                :
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" color='red' width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                                    </svg>
                                                </div>

                                        }
                                    </div>
                                    : ""}




                            </div>
                        )
                    })}
            </div>

            <div className='dropdown-listanswer' id='listanswer'>
                {

                onlyans.map((obj,id)=>{
                   return <a key={id} onClick={()=>{
                         document.getElementById("target-1").className='value2 transform'
                        setMartlist([])
                        let databody = { "questioncode": obj }

                        return fetch('/objectcode', {
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
                            .then((data) => {setGetqstmark(data)
                                // console.log(getqstmark)

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
                            .then((data) => {setGetansmark(data)
                            // console.log(getansmark)
                        })

                        })
                    }
                   }>{obj}</a>
                
                })
                }
                
               
            </div>



            <div >
                {
                   getqstmark?
                   
                   <div style={{width:'20%',float:'left'}}>
                    {
                    
                    getqstmark.map((obj,i)=>{
                        const a=t(obj)
                        return (
                        <div style={{paddingLeft:'10px',boxShadow: 'rgb(241 157 1) 0px 0px 7px 4px',
                        borderRadius: '34px 0px 17px 0px',fontFamily:'cursive'}}>
                        <p key={i} style={{overflowWrap: 'break-word'}}>{obj.username}:{a}</p>
                        <button onClick={()=>{
                        // setListuser('user')
                        setMartlist(obj.answers)
                        document.getElementById('target-1').classList.toggle('show2')
                        }} style={{fontFamily: 'cursive',border: '0px', backgroundColor:' beige',borderRadius:'20px'}}>Details</button>
                        </div>)
                        })
                        
                        
                    }
                      
                    </div>:""
                }
                
                <div id="target-1" className='value2 transform' style={{width:'73%',float:'center',marginTop: '3%'}}>
                       
                { marklist.length!==0 ||marklist!==undefined?
                <div>
                        {getansmark.map((obj3,i)=>{
                          
                        return (

                            <div key={i} className='mklist'>
                                <p style={{color:'white'}}>question {i+1}:{obj3.question}<br/>
                                option 1:{obj3.option1}<br/>
                                option 2:{obj3.option2}<br/>
                                option 3:{obj3.option3}<br/>
                                option 4:{obj3.option4}<br/>
                                answer:{obj3.answer}<br/>
                                your option:{marklist[i]}</p>
                                {obj3.answer===marklist[i]?<p style={{color:'white'}}>True</p>:marklist[i]===''?<p style={{color:'white'}}>not answered</p>:<p style={{color:'white'}}>false</p>}
                            </div>

                        )
                        
                        })}
                       

                    </div> 
                        :""}


                </div>
                 
              
            </div>

            {/* for displaying mark details */}
            {/* <div>
            
                <div id="target-1" className='value2 transform' >
                   {getansmark.map((obj3,i)=>{
                   return (

                    <div key={i}>
                        <p>question {i+1}:{obj3.question}</p>
                        <p>option 1:{obj3.option1}</p>
                        <p>option 2:{obj3.option2}</p>
                        <p>option 3:{obj3.option3}</p>
                        <p>option 4:{obj3.option4}</p>
                    </div>

                   )
                   
                   })}
                </div>

          
            </div> */}





        </div>

    )

    function t(obj){
        var t=0
        obj.answers.forEach((obj2,i)=>{

        if (getansmark[i]!==undefined){
          if(obj2===getansmark[i].answer ){t=t+1}

             }
              
         })
         return t
    }


}

export { Addqst }

