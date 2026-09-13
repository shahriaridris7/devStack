import React from 'react';
import logo from "../assets/banner-stack.png"

const Hero = () => {
    return (
        <div className='container mx-auto m-2 lg:flex justify-between items-center'>
            <div  >
                   <h1 className=' text-4xl lg:text-6xl font-bold'>Build your Ideal</h1>
                   
                   <h1 className='text-4xl lg:text-6xl font-bold bg-linear-to-r from-red-500 to-purple-800 bg-clip-text text-transparent'>Development Stack</h1>
                   <div className='mt-6'>
                    <p>Explore frontend, backend, database, and tooling options,
                   <br />compare them side by side, and put together the stack that fits your <br />
                   next project.</p>
                   </div>
                   

                   <div className='mt-4 flex gap-3'>
                    <button className="btn  btn-secondary">Secondary</button>
                    <button className="btn ">Default</button>
                   </div>
            </div>
            <div>
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Hero;