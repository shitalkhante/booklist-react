import "../style.css";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Login =()=>{
    const [state,setState] = useState({email:undefined,pass:undefined});
    const navigate = useNavigate();

    const login=async()=>{
            await axios.post("https://booklist-api-rr6z.onrender.com",{email:state.email,pass:state.pass})
            .then(result=>{
                if(result.data.token){
                    console.log(result);
                    localStorage.setItem("token",result.data.token)
                    alert(result.data.msg);
                    navigate("/home");
                }
                else{
                    alert("incorrect password");
                }
            }).catch(err=>{
                alert(err);
            })
    }
    return(
        <div className="outer" style={{backgroundColor: "rgb(255, 111, 50)"}}>
            <div style={{backgroundColor:"white",padding:"10px 20px"}}>
                <div className="logo"></div>
                <div className="form">
                    <h2 className="page-header">Member Login</h2>
                    <input type={"email"} placeholder="Username" required={true} onChange={(e)=>setState({...state,email:e.target.value})}/>
                    <input type={"password"} placeholder="Password" required={true} onChange={(e)=>setState({...state,pass:e.target.value})}/>
                    <button className="button" onClick={()=>login()}>LOGIN</button>
                    <h3 className="link" style={{marginBlock:"0"}}>Forget Password?</h3>
                    <h3 className="link" style={{marginBlock:"0"}} onClick={()=>{
                        navigate("/register");
                    }}>Register</h3>
                </div>
            </div>
        </div>
    )
}