import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import "./Home.css"
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapLocationDot} from "@fortawesome/free-solid-svg-icons"
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents";
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
        
        {/* Hero Section */}
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

        {/* Upcoming Events Section */}
        <div className="upcoming-events">
            <FontAwesomeIcon icon={faMapLocationDot} style={{ paddingTop: '70px', fontSize: '3em', paddingLeft: '137px', paddingRight: '30px' ,color:'whitesmoke'}}/>
            <span className='idli'>FIND NEW UPCOMING EVENTS!</span><br /><span className="imlimli">Step out or stay in. Make a plan. Have a look at a few locations. </span>
        </div>
        <UpcomingEvents/>
       

        </div>
    );
    };

    export default Home;
