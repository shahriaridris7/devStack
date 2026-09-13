import React from 'react';
import type { technologyType } from '../type/technologyType';
import Techcard from './Techcard';
interface AllProps  {
    technology: technologyType[];
    onAdd: (tech: technologyType) => void; 
    selected:technologyType[];
};
const All = ({technology,onAdd,selected}:AllProps) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' >{
             technology.map((tech: technologyType) => {
             return<div key={tech.id}>
                <Techcard tech={tech}
                onAdd={onAdd}
                isSelected={selected.some((item) => item.id === tech.id)}/>
             </div>
            })
            }
           
        </div>
    );
};

export default All;