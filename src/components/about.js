import React from "react";
const About = ({ imageSrc, aboutText }) => {
    const defaultImageSrc = "https://via.placeholder.com/215";
  
    return (
      <aside>
        <img src={imageSrc || defaultImageSrc} alt="blog logo" />
        <p>{aboutText}</p>
      </aside>
    );
  };

  export default About;