import React from 'react';

const TechCard = ({ feature }) => (
  <div className="card w-[280px] bg-[#141922] shadow-xl pt-3">
    <img className="ml-4 w-1/4 pb-1" src={feature.image} alt={feature.title} />
    <div className="card-body pt-0">
      <h2 className="card-title text-white">{feature.title}</h2>
      <p className="text-slate-400">{feature.techs.join(', ')}</p>
    </div>
  </div>
);

export default TechCard;
