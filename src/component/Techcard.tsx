import React from 'react';
import type { technologyType } from '../type/technologyType';

const Techcard = ({tech}:{tech:technologyType}) => {
    return (
        <div className="card  relative bg-base-100 w-96 shadow-sm">
 <figure className="h-16 flex items-center justify-between px-4">
  <img
    src={tech.icon}
    alt={tech.name}
    className="w-10 h-10 object-contain"
  />

  <div className="badge badge-outline badge-secondary">
    {tech.badge}
  </div>
</figure>


  <div className="card-body mt--4">
    <h2 className="card-title">{tech.name}</h2>
    <p>{tech.description}</p>
    <div className='flex justify-between item center'>
        <h2 className='badge badge-ghost'>{tech.category}</h2>
        <h2 className='badge badge-ghost'>{tech.difficulty}</h2>
        <h2 className='badge badge-ghost'>{tech.rating}</h2>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-block btn-neutral mx-auto">Add to Stack</button>
    </div>
  </div>
</div>
    );
};

export default Techcard;