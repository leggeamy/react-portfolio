import React from 'react';
import PhotoList from '../PhotoList';
import coverImage from "../../assets/images/portfolio_cover.png";


function Portfolio() {
  return (
    <section>
      <img src={coverImage} style={{ width: "100%" }} alt="cover" />
      <p></p>
      <PhotoList></PhotoList>
    </section>
  );
}
export default Portfolio;
