
import { Suspense } from "react";
import Hero from "./component/Hero"
import Nav from "./component/Nav"
import Technology from "./component/Technology";
import type { technologyType } from "./type/technologyType";
import Footer from "./component/Footer";

const  technologiesfetch =async():Promise<technologyType[]>=>{
  const res= await fetch('/data.json')
  const data=await res.json();
  return data;
};

function App() {
  
const technologiesPromise= technologiesfetch()
  return (
    <>
    
      <Nav/>
       <Hero/>

          <Suspense
  fallback={
    <div className="flex justify-center items-center ">
      <span className="loading loading-bars loading-xl"></span>
    </div>
  }
>
  <Technology technologiesPromise={technologiesPromise} />
</Suspense>
        <Footer/>
       </>
      
  )
}

export default App
