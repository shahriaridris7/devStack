import React from 'react';
import type { technologyType } from '../type/technologyType';

const All = ({technology}:{ technology: technologyType[] }) => {
    return (
        <div className='grid grid-cols-3  gap-4  container mx-auto' >{
             technology.map((tech: technologyType) => {
             return <div className="card  relative bg-base-100 w-96 shadow-sm">
  <figure className='relative h-16'>
    <img
    src={tech.icon}
      alt="Shoes"className='  absolute top-6 left-4 w-10 h-10 object-contain' />
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
            })
            }
           
        </div>
    );
};

export default All;