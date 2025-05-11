import React from 'react';
import { SyncLoader } from 'react-spinners';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-90 z-50">
      <SyncLoader color="white" size={20} />
      {/* <h2 className="text-center text-white text-xl font-semibold mt-4">Loading tasks...</h2> */}
    </div>
  );
}
