import React, { use } from 'react';
import type { technologyType } from '../type/technologyType';
import All from './All';


interface technologiesProps{
   technologiesPromise: Promise<technologyType[]>
}
const Technology = ({technologiesPromise}:technologiesProps) => {
     console.log(technologiesPromise);
     const technology=use(technologiesPromise);
    return (
        <div>
            <All technology={technology}></All>
        </div>
    );
};

export default Technology;