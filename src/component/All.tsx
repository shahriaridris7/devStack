import React from 'react';
import type { technologyType } from '../type/technologyType';
import Techcard from './Techcard';
interface AllProps  {
    technology: technologyType[];
    onAdd: (tech: technologyType) => void; 
};
const All = ({technology,onAdd}:AllProps) => {
    return (
        <div className='grid grid-cols-3  gap-4  container mx-auto' >{
             technology.map((tech: technologyType) => {
             return<div key={tech.id}>
                <Techcard tech={tech}
                onAdd={onAdd}/>
             </div>
            })
            }
           
        </div>
    );
};

export default All;