import React from "react";
// import styles from 'styles/Loader.module.css'

export const Loading = () => {
  // const BASE_URL="https://recipe-finder-app-sigma.vercel.app/"
  const BASE_URL="http://localhost:3000/"

  return <div className="loaderContainer">
    <img src={`${BASE_URL}/loader.svg`} />
    <div className='text-center'>Loading...</div>
  </div>
};
