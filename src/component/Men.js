import React from "react";
import "./Men.css"; // Import the CSS for styling

const Men = () => {
  return (
    <div className="men-container">
      <h2>Nike Shoes for Men</h2>
      <div className="shoes-grid">
        <div className="shoe-item">
          <img
            src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/ca929f7e-f433-46b7-8d83-1a6171c172ce/NIKE+REVOLUTION+7+EASYON.png"
            className="shoe-img"
          />
          <span className="shoe-name">Nike Air Jordan 1 Mid</span>
        </div>
        <div className="shoe-item">
          <img
            src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/7b6090af-7d8d-473f-b9cf-2d8fe719a000/NIKE+ZOOMX+INVINCIBLE+RUN+FK+3.png"
            className="shoe-img"
          />
          <span className="shoe-name">Nike Air Max 97</span>
        </div>
        <div className="shoe-item">
          <img
            src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/ac6672b0-33da-49ad-9a6f-412ae3987bcc/NIKE+DOWNSHIFTER+13.png"
            alt="Nike Air Force 1"
            className="shoe-img"
          />
          <span className="shoe-name">Nike Air Force 1</span>
        </div>
        <div className="shoe-item">
          <img
            src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/75bc7c02-f18c-43d3-9456-2d00bb6d5e30/NIKE+JOURNEY+RUN.png"
            alt="Nike Air Force 1"
            className="shoe-img"
          />
          <span className="shoe-name">Nike Air Force 1</span>
        </div>
      </div>
    </div>
  );
};

export default Men;
