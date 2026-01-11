
import React from 'react'

const App = () => {
  return (
    <div className="h-screen w-full bg-pink-300/40 flex justify-center items-center">
      <div className="w-[50%] h-[70%] bg-[#2E8B8A] shadow-2xl shadow-zinc-500 rounded-2xl overflow-hidden flex flex-col items-center">
        <div className="flex w-full flex-col gap-2 items-center justify-center">
          <h1 className="text-[#2A3B5F] mt-10 text-3xl font-bold">
            PassStrength
          </h1>
          <p className="text-[#2a3b5fb1] text-lg">
            Strength-test your secret before the hackers do.
          </p>
        </div>
        <div className="bg-green-400 mt-12 w-[80%]">
          <div className="bg-red-400 flex items-center justify-between">
            <p className=''>Password: </p>
            <input type="text" placeholder="Enter your password here..." className='w-[86%]'/>
          </div>
          <ul>
            <li>Length should be more than 8</li>
            <li>Should have atleast 1 symbol</li>
            <li>Should have atleast 1 number</li>
            <li>Should have atleast 1 uppercase letter</li>
            <li>Should have atleast 1 lowercase letter</li>
            <li>Should not have space</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App