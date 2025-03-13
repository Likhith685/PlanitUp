import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const welcometext1 = "Welcome to Eventico";
  const welcometext2 = "Discover & Book Events Near You!";

  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for events in: ${location}`);
  };

  return (
    <div>
      <Navbar />

      {/*code for background image on homepage */}
      <div className="bg-djnight">
        <div className="overlay-text">
          {welcometext1.split("").map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          <br />
          {welcometext2.split("").map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.04}s` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search by location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>

      {/* Upcoming Events */}

      

    </div>
  );
};

export default Home;
