import React from 'react';
import logo from "../assets/logo-text.png"
const Footer = () => {
    return (
        
            <footer className=" container mx-auto footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <aside>
  <img src={logo} alt="" />
    <p>
      curated tools technologies, and resources for developers building
      <br />
      modern software.
    </p>
    <div >
        <ul className='flex justify-between gap-3'>
         <li><a className="link link-hover ">GitHub</a></li> 
           <li> <a className="link link-hover ">Twitter</a></li>
              <li><a className="link link-hover ">Linkdin</a></li>
        </ul>
          
    </div>
  </aside>
  <nav>
    <h6 className="footer-title text-black font-bold">Products</h6>
    <a className="link link-hover font-light">Home</a>
    <a className="link link-hover font-light">Technology</a>
    <a className="link link-hover font-light">Projects</a>
  </nav>
  <nav>
    <h6 className="footer-title text-black font-bold">Company</h6>
    <a className="link link-hover font-light">About us</a>
    <a className="link link-hover font-light">Contact</a>
    <a className="link link-hover font-light">career</a>

  </nav>
  <nav>
    <h6 className="footer-title text-black font-bold">Legal</h6>
    <a className="link link-hover font-light">Terms of use</a>
    <a className="link link-hover font-light">Privacy policy</a>
    
  </nav>
</footer>
        
    );
};

export default Footer;