import { use, useState } from 'react';
import type { technologyType } from '../type/technologyType';
import All from './All';
import Selected from './Selected';
import { toast } from "react-toastify";


interface technologiesProps{
   technologiesPromise: Promise<technologyType[]>
}


const Technology = ({technologiesPromise}:technologiesProps) => {
     console.log(technologiesPromise);

     const technology=use(technologiesPromise);
     const [selected, setSelected] = useState<technologyType[]>([]);
     const handleAdd = (tech: technologyType) => {
        if (selected.some((item) => item.id === tech.id)) {
            toast.warning(`${tech.name} is already in your stack!`);
        return;
    }
    
        setSelected([...selected, tech]);
         toast.success(`${tech.name} added to your stack!`);
        };
        const handleRemove = (id: string) => {
             const removedTech = selected.find((tech) => tech.id === id);
    setSelected(selected.filter((tech) => tech.id !== id));
     toast.success(`${removedTech?.name} is removed from the stack`);
};
const handleRemoveAll = () => {
    setSelected([]);
     toast.success(`Everything is removed`);
};
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4  gap-5 container mx-auto'>
            <div className='col-span-3'>
                 <All technology={technology}
                 onAdd={handleAdd} 
                 selected={selected}></All>
            </div>
            <div className='col-span-1'><Selected selected={selected} onRemove={handleRemove} onRemoveAll={handleRemoveAll}></Selected></div>
            
        </div>
    );
};

export default Technology;