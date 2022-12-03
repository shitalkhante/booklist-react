import "../style.css";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Register =()=>{
    const [state,setState] = useState({email:undefined,pass:undefined,cpass:undefined});
    const navigate = useNavigate();

    const register =async()=>{
        if(state.pass===state.cpass){
            await axios.post("https://booklist-api-rr6z.onrender.com/register",{email:state.email,pass:state.pass})
            .then(result=>{
                alert("Registered Successfully");
            }).catch(err=>{
                alert("email already registered");
            })
        }
    }

    return(
        <div className="outer" style={{backgroundColor: "rgb(15, 173, 157)"}}>
            <div style={{backgroundColor:"white",padding:"10px 20px"}}>
                <div className="logo"></div>
                <div className="form" >
                    <h2 className="page-header">Register</h2>
                    <input type={"email"} placeholder="Username" required="true" onChange={(e)=>setState({...state,email:e.target.value})}/>
                    <input type={"password"} placeholder="Password" required="true" onChange={(e)=>setState({...state,pass:e.target.value})}/>
                    <input type={"password"} placeholder="Confirm Password" required="true" onChange={(e)=>setState({...state,cpass:e.target.value})}/>
                    <button className="button" onClick={()=>register()}>REGISTER</button>
                    <h3 className="link" onClick={()=>{
                        navigate("/");
                    }}>Member Login</h3>
                </div>
            </div>
        </div>
    )
}