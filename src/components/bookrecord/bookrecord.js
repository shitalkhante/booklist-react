import {useNavigate,useLocation} from "react-router-dom";
import react, { useEffect } from "react";
import "./bookrecord.css";
import axios from "axios";

export const BookRecord =()=>{
    const navigate = useNavigate();
    
    const {state} = useLocation();

    const delet =async()=> {
        console.log(localStorage.getItem("token"));
        console.log(state);
        await axios.delete("http://localhost:8000/deletedata",state,{headers:{"key":localStorage.getItem("token")}}).then(res=>{
            alert(res.data.result);
        }).catch(err=>{
            console.log(err);
        })
    }
  return(
    <div className="home-body" >
            <div style={ {boxSizing:"border-box",display:"inline-block",width:"50%",textAlign:"center"}}>
            <button id="show-book" onClick={()=>{navigate("/home");window.location.reload()}}>Show Book List</button>
            <h1 id="record-header">Book's Record</h1>
            <p id="sub-header">View Book's Info</p>
            <table>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Title</td>
                        <td>{state.title}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Author</td>
                        <td>{state.author}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>ISBN</td>
                        <td>{state.ISBN}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Publisher</td>
                        <td>{state.published_by}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Published Date</td>
                        <td>{state.publish_date}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>description</td>
                        <td>{state.description}</td>
                    </tr>
                </tbody>
            </table>
            <div id="btns">
                <button id="delete" onClick={()=>{delet()}}>Delete Book</button>
                <button id="edit" onClick={()=>{navigate("/edit",{state:state});window.location.reload()}}>Edit Book</button>
            </div>
            </div>
    </div>
  )   
}