import React from 'react';
import type { technologyType } from '../type/technologyType';

interface SelectedProps {
  selected: technologyType[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const Selected = ({ selected, onRemove, onRemoveAll }: SelectedProps) => {
  return (
    <div className="border-2 border-slate-300 rounded-lg shadow-sm p-4">
      <h2 className="text-2xl font-bold">Your Stack</h2>

      <p className="m-2">{selected.length} Technology Selected</p>

      {selected.length === 0 ? (
        <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 my-4 text-center bg-slate-50">
          <p className="text-slate-500 font-medium text-lg">Your stack is empty.</p>
          <p className="text-slate-400 text-sm mt-1">Add some technologies to get started!</p>
        </div>
      ) : (
        <>
          <div className="space-y-3 my-2">
            {selected.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between gap-2 border-2 border-slate-300 rounded-lg shadow-sm p-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10 object-contain"
                  />

                  <div>
                    <h3 className="font-bold">{tech.name}</h3>
                    <p className="text-sm text-gray-500">{tech.category}</p>
                  </div>
                </div>

                <button onClick={() => onRemove(tech.id)}>
                  <div className="text-2xl font-bold hover:text-red-500">×</div>
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="btn btn-block btn-neutral mx-auto my-2"
          >
            Remove all
          </button>
        </>
      )}
    </div>
  );
};

export default Selected;