import image from "./bookcover.jpg";
import "./homepage.css";
import {useNavigate} from "react-router-dom";
import react, { useEffect, useState } from "react";
import axios from "axios";

export const HomePage =()=>{
    const navigate = useNavigate();
    const [state,setState] = useState([]);

    const getdata=async()=>{
        await axios.get("http://localhost:8000/getbooks",{headers:{"key":localStorage.getItem("token")}}).then(res=>{
            setState(res.data.result);
            console.log(state);
        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        // window.location.reload()
        getdata()
    },[state])

    return(
        <div className="home-body">
            <button id="logout">Logout</button>
            <h1>Books List</h1>
            <button id="add-new" onClick={()=>navigate("/addbook")}>+ Add New Book</button>

            <div className="books">
                {state.length>0 &&
                    state.map((data,id)=>{
                        return(
                            <div className="book" onClick={()=>{navigate("/viewbook",{state:data});window.location.reload()}}>
                    <div style={{height:"200px"}}><img src={image} alt="cover-image" /></div>
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