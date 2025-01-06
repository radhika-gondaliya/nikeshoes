import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu-container">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        <Link to="/Men" className="category-item">
          <img
            src="https://static.toiimg.com/photo/83890830/83890830.jpg"
            alt="Men Category"
            className="category-img"
            height={400}
            width={300}
          />
          <span className="category-title">Men</span>
        </Link>
        <Link to="/Women" className="category-item">
          <img
            src="https://media.istockphoto.com/id/1185367863/photo/smiling-business-woman-portrait.jpg?s=612x612&w=0&k=20&c=i19PDtTroZB0r1K1MmWARhdfQ4NHoTYB7SDyDn8W09I="
            alt="Women Category"
            className="category-img"
            height={400}
            width={300}
          />
          <span className="category-title">Women</span>
        </Link>
        <Link to="/kids" className="category-item">
          <img
            src="https://img.freepik.com/premium-photo/fashion-boy-girl-stylish-clothes-colored-wall-b_86390-1599.jpg"
            alt="Kids Category"
            className="category-img"
            height={400}
            width={300}
          />
          <span className="category-title">Kids</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
