import React, { use } from 'react';
import type { technologyType } from '../type/technologyType';
import All from './All';
import Selected from './Selected';


interface technologiesProps{
   technologiesPromise: Promise<technologyType[]>
}


const Technology = ({technologiesPromise}:technologiesProps) => {
     console.log(technologiesPromise);
     const technology=use(technologiesPromise);
    return (
        <div className='grid grid-cols-4 container mx-auto'>
            <div className='col-span-3'>
                 <All  technology={technology}></All>
            </div>
            <div className='col-span-1'><Selected/></div>
            
        </div>
    );
};

export default Technology;