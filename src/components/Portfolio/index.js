import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { Link } from 'react-router-dom';

function Portfolio(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1></h1>
      <p></p>
      <PhotoList></PhotoList>
    </section>
  );
}
export default Portfolio;
