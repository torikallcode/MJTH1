import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../fragments/Navbar";

export const AuthLayout = () => {

  return (
    <div className="font-baskerville">
      <Navbar />
      {/* <NavbarComponent></NavbarComponent> */}
      <div className="flex flex-col justify-center items-center bg-white">
        <div className="relative flex flex-col justify-center items-center mx-auto w-full h-screen">
          <h1 className="text-6xl text-center mx-auto max-w-[250px] xl:max-w-md xl:text-8xl text-hitam">My Journey To Heaven</h1>
          <Link
            to={'/docs'}
            className="absolute bottom-32 text-hitam text-base font-poppins font-medium cursor-pointer bg-gray-100 py-2 px-3 rounded-lg">Get Started</Link>
          <h2 className="text-3xl absolute bottom-12 text-center">I</h2>
        </div>
      </div>
    </div>
  );
}