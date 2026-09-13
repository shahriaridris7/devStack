import React from 'react';
import type { technologyType } from '../type/technologyType';
interface techProps{
  tech:technologyType
  onAdd: (tech: technologyType)=> void;
  isSelected:boolean;
}
const Techcard = ({tech,onAdd,isSelected}:techProps) => {
    return (
        <div className="card  relative bg-base-100 w-96 shadow-sm">
 <figure className="h-16 flex items-center justify-between px-6">
  <img
    src={tech.icon}
    alt={tech.name}
    className="w-10 h-10 object-contain"
  />

  <div className="badge badge-outline badge-secondary">
    {tech.badge}
  </div>
</figure>


  <div className="card-body  ">
    <h2 className="card-title my-2 text-2xl font-bold">{tech.name}</h2>
    <p>{tech.description}</p>
    <div className='flex justify-between item center my-2'>
        <h2 className='badge badge-ghost'>{tech.category}</h2>
        <h2 className='badge badge-ghost'>{tech.difficulty}</h2>
        <h2 className='badge badge-ghost'>{tech.rating}</h2>
    </div>
    <div className="card-actions justify-end">
      <button
       onClick={() => onAdd(tech)}
        className="btn btn-block btn-neutral mx-auto my-2">{isSelected ? "Added to Stack" : "Add to Stack"}</button>
    </div>
  </div>
</div>
    );
};

export default Techcard;