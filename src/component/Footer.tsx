import React from 'react';
import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-base-200 container mx-auto">

     
      <div className=" footer sm:footer-horizontal text-base-content p-10">

        <aside>
          <img src={logo} alt="devStack logo" />

          <p>
            Curated tools, technologies, and resources for developers building
            <br />
            modern software.
          </p>

          <ul className="flex gap-3 mt-3">
            <li>
              <a className="link link-hover">GitHub</a>
            </li>
            <li>
              <a className="link link-hover">Twitter</a>
            </li>
            <li>
              <a className="link link-hover">LinkedIn</a>
            </li>
          </ul>
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
          <a className="link link-hover font-light">Career</a>
        </nav>

        <nav>
          <h6 className="footer-title text-black font-bold">Legal</h6>
          <a className="link link-hover font-light">Terms of use</a>
          <a className="link link-hover font-light">Privacy policy</a>
        </nav>

      </div>

     
      <div className="container mx-auto">
        <div className="divider my-0"></div>
      </div>

     
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 px-10 py-5">

        <p className="font-light text-sm">
          © Copyright 2026 devStack. All rights reserved
        </p>

        <ul className="flex gap-3 text-sm">
          <li>
            <a className="link link-hover">Privacy</a>
          </li>
          <li>
            <a className="link link-hover">Terms</a>
          </li>
        </ul>

      </div>

    </footer>
  );
};

export default Footer;