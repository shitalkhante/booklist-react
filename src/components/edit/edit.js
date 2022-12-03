import {useNavigate,useLocation} from "react-router-dom";
import react, { useEffect, useState } from "react";
import "../bookrecord/bookrecord.css";
import "./edit.css";
import axios from "axios";

export const Edit =(props)=>{
    const navigate = useNavigate();
    const {state} = useLocation();
    const [data,setData] = useState(state);
    console.log(data);

    const update =async()=>{
        
           await axios.patch("http://localhost:8000/update",data,{headers:{"key":localStorage.getItem("token")}}).then(res=>{
                alert(res.data.result);
                window.location.reload();
            }).catch(err=>{
                alert(err.data.error);
            })
        
    }

  return(
    <div className="home-body" >
            <div style={ {boxSizing:"border-box",display:"inline-block",width:"50%",textAlign:"center"}}>
            <button id="show-book" onClick={()=>{navigate("/home");window.location.reload()}}>Show Book List</button>
            <h1 id="record-header">Edit Book</h1>
            <p id="sub-header">Update Book's Info</p>
            <div className="add-book-form" style={{gap:"5px"}}>
                <p className="lable">Title</p>
                <input type={"text"} value={data.title}  onChange={(e)=>{setData({...data,title:e.target.value})}}/>
                <p className="lable">ISBN</p>
                <input type={"text"} value={data.ISBN} onChange={(e)=>{setData({...data,ISBN:e.target.value})}}/> 
                <p className="lable">Author</p>
                <input type={"text"} value={data.author} onChange={(e)=>{setData({...data,author:e.target.value})}}/>
                <p className="lable">Description</p>
                <input type={"text"} value={data.description} onChange={(e)=>{setData({...data,description:e.target.value})}}/>
                <p className="lable">Publish Date</p>
                <input type={"text"} value={data.publish_date} onChange={(e)=>{setData({...data,publish_date:e.target.value})}}/>
                <p className="lable">Publisher</p>
                <input type={"text"} value={data.published_by} onChange={(e)=>{setData({...data,publish_by:e.target.value})}}/>
                <button id="add-book-submit" onClick={()=>update()} style={{marginTop:"10px"}} >Update Book</button>
            </div>
               
            </div>
    </div>
  )   
}