
import { Suspense } from "react";
import Hero from "./component/Hero"
import Nav from "./component/Nav"
import Technology from "./component/Technology";
import type { technologyType } from "./type/technologyType";

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

          <Suspense fallback={<h1>loading..</h1>}>
      <Technology technologiesPromise={technologiesPromise} />
          </Suspense>
       
       </>
  )
}

export default App
