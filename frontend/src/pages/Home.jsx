import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import "./Home.css"
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

    const Home = () => {
    const { user} = useAuth0();
    const [city, setCity] = useState("");

    const onSearch = () => {
        dispatch({type:"NEW_SEARCH" , payload :{city}});
        Navigate.push("/list", { state:  {city}  });
      };

    return (
        <div className="home">
        <Navbar />
        
        <div className="contone">
        <div className="contonecont">
          <span className='lonetit' > <b> {user && "Hi, "+user.name}</b><br/><b>Have any <span style={{ color: "red" }}>weekend plans?</span></b></span><br /><br /><br/>
          <div className="lonecontent" >Looking for something to do lately? Whether you're a local, new in town or just cruising through we've got loads of great tips and events-from thrilling concerts to thought-provoking conferences, we have a wide variety of experiences for you to choose from.You can explore by location, popularity, free stuff... you got this. Ready?</div><br /><br />
          
          <div className="input-group" id = "#searchbox" >
          <input type="text" name="text" className="input" id="Email"  placeholder="search by location!" onChange={(evt)=>{setCity(evt.target.value)}}/>
          <button className="button--submit"onClick={onSearch} >SEARCH</button>
          </div>
        </div>
        </div>
        
       

        </div>
    );
    };

    export default Home;
