import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContainer}>
        <div style={contactStyle}>
          <h3>Nike shoes</h3>
          <p>Phone: +91 987687815</p>
          <p>Email: Nikeshoes@gmail.com</p>
        </div>
        <div style={socialIconsStyle}>
          <h4>Follow us</h4>
          <a href="https://twitter.com" style={iconStyle}>
            <FaTwitter />
          </a>
          <a href="https://facebook.com" style={iconStyle}>
            <FaFacebook />
          </a>
          <a href="https://linkedin.com" style={iconStyle}>
            <FaLinkedin />
          </a>
          <a href="https://youtube.com" style={iconStyle}>
            <FaYoutube />
          </a>
          <p>Created By Radhika Gondaliya</p>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "gray",
  padding: "20px 0",
  textAlign: "center",
  borderTop: "1px solid #dee2e6",
  fontSize: 20,
};

const footerContainer = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  maxWidth: "1000px",
  margin: "0 auto",
};

const contactStyle = {
  flex: "1",
  margin: "10px",
};

const socialIconsStyle = {
  flex: "1",
  margin: "10px",
};

const iconStyle = {
  color: "#000",
  margin: "0 10px",
  textDecoration: "none",
  fontSize: "24px",
};

export default Footer;
