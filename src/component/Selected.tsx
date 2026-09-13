import React from 'react';
import type { technologyType } from '../type/technologyType';
interface selectedProps{
    selected:technologyType[]
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}
const Selected = ({selected,onRemove,onRemoveAll}:selectedProps) => {
    return (
        <div>
            <h2>Your Stack</h2>

            
            <p>{selected.length} Technology Selected</p>
            {selected.map((tech) => (
                <div
                    key={tech.id}
                    className=" flex items-center justify-between border p-3"
                >
                    <div className="flex items-center gap-4 ">
                        <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-10 h-10 object-contain"
                        />

                        <div>
                            <h3 className="font-bold">
                                {tech.name}
                            </h3>

                            <p className="text-sm text-gray-500">
                                {tech.category}
                            </p>

                           
                        
   

                        </div>
                        
                    </div>
                    
                          <button onClick={() => onRemove(tech.id)}>
                             ×
                   </button>
                  
                    
                       
                    
                </div>
            ))}
             <button onClick={onRemoveAll}>
    Remove All
</button>
       
        </div>
       
    );
};

export default Selected;