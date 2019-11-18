import React from 'react';
import HeroCard from './HeroCard';

const HeroCardList = ({ heroes }) => {

  const heroesArray = heroes.map(hero => {
    return (
      <HeroCard details={hero} />
    )
  })

  return (
    <div>
      {heroesArray}
    </div>
  );
};

export default HeroCardList;