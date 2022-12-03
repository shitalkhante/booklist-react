import "./addbook.css";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const AddBook=()=>{
    const [state,setState] = useState({
        title:null,ISBN:null,author:null,description:null,publish_date:null,publish_by:null
    });
    const navigate = useNavigate();

    const add =async()=>{
        if(state.title && state.ISBN && state.author && state.description && state.publish_by && state.publish_date){
            axios.post("https://booklist-api-rr6z.onrender.com/addbook",state,{headers:{"key":localStorage.getItem("token")}}).then(res=>{
                alert(res.data.result);
            }).catch(err=>{
                alert(err.data.error);
            })
        }else{
            alert("all fields are mandatory");
        }
    }
    return(
        <div className="add-book-body">
            <button id="show-book" onClick={()=>navigate("/home")}>Show Book List</button>
            <h1>Add Book</h1>
            <h5>Create new book</h5>
            <div className="add-book-form">
                <input type={"text"} placeholder="Title of the book" onChange={(e)=>{setState({...state,title:e.target.value})}}/>
                <input type={"text"} placeholder="ISBN" onChange={(e)=>{setState({...state,ISBN:e.target.value})}}/> 
                <input type={"text"} placeholder="Author" onChange={(e)=>{setState({...state,author:e.target.value})}}/>
                <input type={"text"} placeholder="Describe this Book" onChange={(e)=>{setState({...state,description:e.target.value})}}/>
                <input type={"text"} placeholder="published_date" onChange={(e)=>{setState({...state,publish_date:e.target.value})}}/>
                <input type={"text"} placeholder="Publisher of this Book" onChange={(e)=>{setState({...state,publish_by:e.target.value})}}/>
                <button id="add-book-submit" onClick={()=>add()}>Submit</button>
            </div>
        </div>
    )
}