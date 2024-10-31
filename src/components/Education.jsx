import React from 'react';
import './Education.css';
import elordeimg from '../portfolio/elordeimg.jpg';
import { FaSchool } from 'react-icons/fa';
import { IoSchoolOutline } from 'react-icons/io5';

const Education = () => {
  return (
    <section id="education">
      <div className="container education__container">
        <div className="education__me">
          <div className="education__me-image">
            <img src={elordeimg} alt="Elorde De Guzman Catabay Jr." />
          </div>
        </div>

        <div className="education__content">
          <div className="education__cards">
            <article className="education__card">
              <FaSchool className="education__icon" />
              <h5>School</h5>
              <small>University Of Pangasinan</small>
            </article>
            <article className="education__card">
              <IoSchoolOutline className="education__icon" />
              <h5>Undergraduate</h5>
              <small>3rd year college | 2023-2024</small>
            </article>
          </div>
          <p>
            I am Elorde De Guzman Catabay Jr., writing to express my interest in the IT student position at your
            company. I am currently pursuing a Bachelor's degree in Information Technology at the University of
            Pangasinan. Throughout my studies, I have gained comprehensive knowledge and hands-on experience in
            various aspects of IT, including systems analysis, database management, programming languages, and
            network administration. I have also developed a strong understanding of emerging technologies,
            such as cloud computing and cybersecurity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
