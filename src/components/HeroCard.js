import React from 'react';
import './styles/herocard.css';

const HeroCard = (props) => {
  const { localized_name, attack_type, primary_attr } = props.details;
  const generateImageLink = (name) => {
    name = name.replace(' ', '_').toLowerCase();
    let dotaImageURI = `http://cdn.dota2.com/apps/dota2/images/heroes/${name}_full.png`;
    return dotaImageURI;
  };

  return (
    <div className="hero-card shadow-5">
      <img src={generateImageLink(localized_name)} alt={localized_name} />
      <div>
        <h2>{localized_name.toUpperCase()}</h2>
        <p><strong>{primary_attr}</strong></p>
        <p>{attack_type}</p>
      </div>
    </div>
  );

}

export default HeroCard;