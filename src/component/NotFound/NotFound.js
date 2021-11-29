import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <>
      <div class="flex items-center justify-center w-screen not-found-height">
        <div class="px-4 lg:py-10">
          <div class="lg:gap-4 lg:flex">
            <div class="mt-4">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/22/23/13/black-dog-1851106__340.jpg"
                alt="img"
                class="object-cover w-full h-full rounded-3xl"
              />
            </div>
            <div class="flex flex-col items-center justify-center md:py-24 lg:py-30 sm:ml-0 lg:ml-10">
              <h1 class="font-bold text-cyan-500 text-7xl">404 Error</h1>
              <p class="mb-2 text-2xl font-semi text-center text-gray-800 md:text-3xl py-5">
                <span class="text-cyan-500">Oops!</span> Page not found!
              </p>
              <p class="mb-8 text-center text-gray-500 md:text-lg">
                The page you’re looking for doesn’t exist. <br />
                Wanna go home safely? Then click the button below
              </p>
              <Link to="/" className="btn btn-primary">
                Go home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;