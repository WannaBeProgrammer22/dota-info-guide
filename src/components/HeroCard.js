import React from 'react';
import './styles/herocard.css';

const HeroCard = (props) => {
  const { img_link, localized_name, attack_type, primary_attr } = props.details;

  return (
    <div className="hero-card">
      <img src={img_link} alt="test" />
      <div>
        <h2>{localized_name.toUpperCase()}</h2>
        <p>{attack_type}</p>
        <p>{primary_attr}</p>
      </div>
    </div>
  );

}

export default HeroCard;