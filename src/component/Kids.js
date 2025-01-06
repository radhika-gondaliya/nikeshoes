import React from "react";
import "./Men.css"; // Import the CSS for styling

const Kids = () => {
  return (
    <div className="men-container">
      <h2>Nike Shoes for Men</h2>
      <div className="shoes-grid">
        <div className="shoe-item">
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9b487144-0612-4d24-bc29-9b9ab82ee93f/NIKE+REVOLUTION+7+%28TDV%29.png"
            className="shoe-img"
          />
          <span className="shoe-name">Boys Running Shoes. Nike </span>
        </div>
        <div className="shoe-item">
          <img
            src="https://cdn.trendhunterstatic.com/thumbs/toddler-nike-shoes_da2dddad.jpeg?auto=webp"
            className="shoe-img"
          />
          <span className="shoe-name">Rubberized Rainbow Sneakers I</span>
        </div>
        <div className="shoe-item">
          <img
            src="https://www.kickscrew.com/cdn/shop/files/main-square_ab5251eb-0af8-4be5-8e04-83e1dc6390fd_874x.jpg?v=1708677328"
            alt="Nike Air Force 1"
            className="shoe-img"
          />
          <span className="shoe-name">Nike Air Force 1</span>
        </div>
        <div className="shoe-item">
          <img
            src="https://i.pinimg.com/736x/51/2e/44/512e44e8934e0af714b1dcd3dedaf9b4.jpg"
            alt="Nike Air Force 1"
            className="shoe-img"
          />
          <span className="shoe-name">Sneaker Slippers</span>
        </div>
      </div>
    </div>
  );
};

export default Kids;
