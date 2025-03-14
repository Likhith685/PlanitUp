import React from 'react'
import "./UpcomingEvents.css"
import { Link } from 'react-router-dom'
import a from "../images/mumbai.jpg"
import b from "../images/chennai.jpg"
import c from "../images/kolkata.jpg"
import d from "../images/bengaluru.jpg"
import e from "../images/hyderabad.jpg"
import f from "../images/pune.jpg"


const UpcomingEvents = () => {
  return (

<div className="contthreecontainer idli">
  <div className="contthreebox">
    <Link to="/event/location/mumbai">
      <img src={a} className="contthreeboximg" alt="mumbai" />
    </Link>
    <h5 className="cthrevecou">
      {/* <b>{data[0]}+</b> events */}
    </h5>
    <b className="countryname">mumbai</b>
  </div>

  <div className="contthreebox">
    <Link to="/event/location/chennai">
      <img src={b} className="contthreeboximg" alt="chennai" />
    </Link>
    <h5 className="cthrevecou">
      {/* <b>{data[1]}+</b> events */}
    </h5>
    <b className="countryname">chennai</b>
  </div>

  <div className="contthreebox">
    <Link to="/event/location/kolkata">
      <img src={c} className="contthreeboximg" alt="kolkata" />
    </Link>
    <h5 className="cthrevecou">
      {/* <b>{data[2]}+</b> events */}
    </h5>
    <b className="countryname">kolkata</b>
  </div>

  <div className="contthreebox">
    <Link to="/event/location/bengaluru">
      <img src={d} className="contthreeboximg" alt="bengaluru" />
    </Link>
    <h5 className="cthrevecou">
      {/* <b>{data[3]}+</b> events */}
    </h5>
    <b className="countryname">bengaluru</b>
  </div>

  <div className="contthreebox">
    <Link to="/event/location/hyderabad">
      <img src={e} className="contthreeboximg" alt="hyderabad" />
    </Link>
    <h5 className="cthrevecou">
      {/* <b>{data[4]}+</b> events */}
    </h5>
    <b className="countryname">hyderabad</b>
  </div>

  <div className="contthreebox">
    <Link to="/event/location/pune">
      <img src={f} className="contthreeboximg" alt="pune" />
    </Link>
    <h5 className="cthrevecou">
      {/* <b>{data[5]}+</b> events */}
    </h5>
    <b className="countryname">pune</b>
  </div>
</div>

  )
}

export default UpcomingEvents
