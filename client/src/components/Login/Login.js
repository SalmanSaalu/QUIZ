import react,{useState,useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../App'

function Login(){

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const {setUsername,username} = useContext(UserContext);
const navigate=useNavigate()

const setUSER = (username) => {
      localStorage.setItem('username', (username))
    setUsername(username);
  }
    return(
        <div>
            <div id="id01" className="modal">

        
                <div className="container">
                    <h1>Sign In</h1>
                    <p>Please fill in this form to create an account.</p>
                    <form>
                    

                    <label style={{paddingRight:'86px'}}><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" value={email} name="email" required onChange={(e)=>setEmail(e.target.value)}/><br/>

                    <label style={{paddingRight:'56px'}}><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" value={password} name="psw" required onChange={(e)=>setPassword(e.target.value)}/><br/>

                    <label>
                    <input type="checkbox"  name="remember" style={{marginBottom:'15px',color:'black'}}/> Remember me
                    </label><br/>
                   
                    {email}
                    {password}
                    
                    <p>By creating an account you agree to our Terms & Privacy.</p>

                    <div className="clearfix">
                    
                    <button type="submit" className="signupbtn" onClick={(e)=>{
                            e.preventDefault()
                            
                            let databody = {

                                "email": email,
                                "password":password
                                
                            }

                            return fetch('/based', {
                                method: 'POST',
                                body: JSON.stringify(databody),
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                
                            })
                            .then(res => res.json())
                            .then((data)=>{

                                if (data.username!=='email or password is not match'){
                                    setUSER(data.username)
                                    
                                        navigate('/')
                                    }
                                    else{
                                        setUsername(data.username)
                                    }

                                })
                            
                        
                        }
                        
                        
                    }>Sign In</button>
                    </div>
                    </form>
                </div>
        
            {username==='email or password is not match' ? <p>{username}</p> : ''}
            </div>
        </div>
    )
}
export {Login}
