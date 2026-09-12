import React from 'react';
import type { technologyType } from '../type/technologyType';
import Techcard from './Techcard';

const All = ({technology}:{ technology: technologyType[] }) => {
    return (
        <div className='grid grid-cols-3  gap-4  container mx-auto' >{
             technology.map((tech: technologyType) => {
             return<div>
                <Techcard key={tech.id} tech={tech}/>
             </div>
            })
            }
           
        </div>
    );
};

export default All;