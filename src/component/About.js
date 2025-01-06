import React from "react";
import "./About.css"; // Custom CSS for styling

const About = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1>About Us</h1>
          <p>
            Discover our journey, mission, and passion for sports and
            innovation.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story py-5">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            At Nike, we believe in the power of sport to move the world forward.
            Our story began with a handshake between two visionary men in 1964 –
            and we’ve been growing ever since. Today, we continue to push the
            boundaries of innovation and performance.
          </p>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="our-team py-5">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="row">
            {/* Team Member Images */}
            <img
              src="https://media.licdn.com/dms/image/C5112AQFtLNJIggjYGg/article-cover_image-shrink_600_2000/0/1520179798366?e=2147483647&v=beta&t=GrsFUm5OuU07s8YhbbUagMpzdn1-lot2hO5GpJI3iKQ"
              alt="Team Member 1"
              className="img-fluid"
            />
            <img
              src="https://image.cnbcfm.com/api/v1/image/101341880-159543969.jpg?v=1532564551"
              alt="Our Story"
              className="img-fluid"
            />
            <img
              src="https://s1.q4cdn.com/806093406/files/doc_person/2023/Jun/nike-inc-leadership-craig-williams-0466-square_RDd3W-9Qz.jpg"
              alt="Team Member 2"
              className="img-fluid"
            />
            <img
              src="https://s1.q4cdn.com/806093406/files/doc_person/2023/May/ONeill23.jpeg"
              alt="Team Member 3"
              className="img-fluid"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
