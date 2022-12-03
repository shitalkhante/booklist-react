import image from "./bookcover.jpg";
import "./homepage.css";
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const HomePage =()=>{
    const navigate = useNavigate();
    const [state,setState] = useState([]);

    const getdata=async()=>{
        await axios.get("https://booklist-api-rr6z.onrender.com/getbooks",{headers:{"key":localStorage.getItem("token")}}).then(res=>{
            setState(res.data.result);
        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getdata()
    },[])

    return(
        <div className="home-body">
            <button id="logout" onClick={()=>{localStorage.clear(); navigate("/")}}>Logout</button>
            <h1>Books List</h1>
            <button id="add-new" onClick={()=>navigate("/addbook")}>+ Add New Book</button>

            <div className="books">
                {state.length>0 &&
                    state.map((data,id)=>{
                        return(
                            <div className="book" onClick={()=>{navigate("/viewbook",{state:data});window.location.reload()}}>
                    <div style={{height:"200px"}}><img src={image} alt="cover" /></div>
                    <h5 className="title">{data.title}</h5>
                    <p className="author">{data.author}</p>
                    <p className="gener">{data.description}</p>
                </div>
                        )
                    })
}
            </div>

        </div>
    )
}