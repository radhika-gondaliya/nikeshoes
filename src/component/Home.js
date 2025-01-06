import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleshopnowClick = () => {
    navigate("/Menu");
  };

  const handleaboutclick = () => {
    navigate("/About");
  };
  return (
    <div className="main">
      <div className="peragraph">
        <h1>
          <b>YOUT FEET DESERVE BETER</b>
        </h1>
        <p> THE BEST SELLER AND BEST QEULITY ALSO PROVIDED BY COMPNY</p>
      </div>

      <div className="shopbutton">
        <button onClick={handleshopnowClick}>shop now</button>
        <button onClick={handleaboutclick}>About us</button>
      </div>
      <div className="minp">
        <p>also available on</p>
      </div>
      <div className="shopicon">
        <img
          src="https://datacentrereview.com/wp-content/uploads/2021/02/Amazon.png"
          alt="amazon"
        />
        <img
          src="https://play-lh.googleusercontent.com/FA_rzaEeLlumm0qh68q3z5Pt-PGMVPf2Z28_pbega7SaXSiKjSzh-0MZceB3FpdvQIBq"
          alt="flipcart"
        />
      </div>
      <div className="shopimg">
        <img
          src="https://media.istockphoto.com/id/1436061606/photo/flying-colorful-womens-sneaker-isolated-on-white-background-fashionable-stylish-sports-shoe.jpg?b=1&s=612x612&w=0&k=20&c=0HNmSNlbRt-6S0-Skx9DKZxrYYYdJRMJqOyYASt3EEI="
          alt="shoes"
          height={600}
          width={800}
        ></img>
      </div>
    </div>
  );
};

export default Home;
