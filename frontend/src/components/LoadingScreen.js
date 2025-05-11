import React from 'react';
import { FadeLoader } from 'react-spinners';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-90 z-50">
      <FadeLoader color="#8899A6" size={-50} />
      {/* <h2 className="text-center text-white text-xl font-semibold mt-4">Loading tasks...</h2> */}
    </div>
  );
}
