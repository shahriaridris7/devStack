import React from 'react';
import type { technologyType } from '../type/technologyType';
import Techcard from './Techcard';

const All = ({technology}:{ technology: technologyType[] }) => {
    return (
        <div className='grid grid-cols-3  gap-4  container mx-auto' >{
             technology.map((tech: technologyType) => {
             return<div key={tech.id}>
                <Techcard  tech={tech}/>
             </div>
            })
            }
           
        </div>
    );
};

export default All;