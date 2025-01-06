import React from "react";
import "./Men.css"; // Import the CSS for styling

const Women = () => {
  return (
    <div className="men-container">
      <h2>Nike Shoes for Men</h2>
      <div className="shoes-grid">
        <div className="shoe-item">
          <img
            src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/1ef55791-81da-4075-89e9-327f01a726d8/W+AIR+MAX+270.png"
            className="shoe-img"
          />
          <span className="shoe-name">Nike Air Max 270 Women's Shoes</span>
        </div>
        <div className="shoe-item">
          <img
            src="https://assets.ajio.com/medias/sys_master/root/20230417/8p9d/643d5da8907deb497aeb128e/-473Wx593H-469473014-white-MODEL.jpg"
            className="shoe-img"
          />
          <span className="shoe-name">Nike Air Max 97</span>
        </div>
        <div className="shoe-item">
          <img
            src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/399d0ea2-36a3-4f5e-80a3-d513245d3e87/WMNS+AIR+MAX+90.png"
            alt="Nike Air Force 1"
            className="shoe-img"
          />
          <span className="shoe-name">Nike Air Max 90 Women's Shoes</span>
        </div>
        <div className="shoe-item">
          <img
            src="https://rukminim2.flixcart.com/image/750/900/krjjde80/shoe/b/0/8/5-da1351-014nike-7-5-nike-black-hyper-pink-cave-purple-lilac-original-imag5byrz3qnfswx.jpeg?q=20&crop=false"
            alt="Nike Air Force 1"
            className="shoe-img"
          />
          <span className="shoe-name">
            NIKE City Rep TR 's Training & Gym Shoes For Women
          </span>
        </div>
      </div>
    </div>
  );
};

export default Women;
