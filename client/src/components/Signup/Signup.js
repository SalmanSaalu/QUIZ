import react,{useState} from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css'

function Signup(){
const [username,setUsername]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [retypepassword,setRetypepassword]=useState('')
const navigate=useNavigate()

    return(
        <div>
            <div id="id01" className="modal">

        
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <form>
                    <label style={{paddingRight:'53px'}}><b>username</b></label>
                    <input type="text" placeholder="Username" value={username} name="username" required  onChange={(e)=>setUsername(e.target.value)}/><br/>

                    <label style={{paddingRight:'86px'}}><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" value={email} name="email" required onChange={(e)=>setEmail(e.target.value)}/><br/>

                    <label style={{paddingRight:'56px'}}><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" value={password} name="psw" required onChange={(e)=>setPassword(e.target.value)}/><br/>

                    <label ><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" value={retypepassword} required onChange={(e)=>setRetypepassword(e.target.value)}/><br/>
                    
                    <label>
                    <input type="checkbox"  name="remember" style={{marginBottom:'15px',color:'black'}}/> Remember me
                    </label><br/>
                    {username}
                    {email}
                    {password}
                    {retypepassword}
                    <p>By creating an account you agree to our Terms & Privacy.</p>

                    <div className="clearfix">
                    
                    <button type="submit" className="signupbtn" onClick={(e)=>{
                            e.preventDefault()
                            console.log("1")
                            let databody = {
                                "username": username,
                                "email": email,
                                "password":password
                                
                            }
                            console.log("2")
                            return fetch('/stored', {
                                method: 'POST',
                                body: JSON.stringify(databody),
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                
                            })
                            .then(res => {res.json()})
                            .then(navigate('/'))

                        }
                        
                    }>Sign Up</button>
                    </div>
                    </form>
                </div>
        
        
            </div>
        </div>
    )
}
export {Signup}
