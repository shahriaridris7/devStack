import React, { use, useState } from 'react';
import type { technologyType } from '../type/technologyType';
import All from './All';
import Selected from './Selected';


interface technologiesProps{
   technologiesPromise: Promise<technologyType[]>
}


const Technology = ({technologiesPromise}:technologiesProps) => {
     console.log(technologiesPromise);

     const technology=use(technologiesPromise);
     const [selected, setSelected] = useState<technologyType[]>([]);
     const handleAdd = (tech: technologyType) => {
        if (selected.some((item) => item.id === tech.id)) {
        return;
    }
        setSelected([...selected, tech]);
        };
        const handleRemove = (id: string) => {
    setSelected(selected.filter((tech) => tech.id !== id));
};
const handleRemoveAll = () => {
    setSelected([]);
};
    return (
        <div className='grid grid-cols-4  gap-5 container mx-auto'>
            <div className='col-span-3'>
                 <All technology={technology}
                 onAdd={handleAdd} ></All>
            </div>
            <div className='col-span-1'><Selected selected={selected} onRemove={handleRemove} onRemoveAll={handleRemoveAll}></Selected></div>
            
        </div>
    );
};

export default Technology;