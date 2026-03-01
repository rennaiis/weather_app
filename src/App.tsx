import { useState } from 'react'
import './index.css' 
function App() {
  return (
    <div className='flex flex-col justify-center items-center p-2 gap-0.5'>
      <h1 className='text-lg w-fit md:text-2xl'>Weather Now</h1>
      <div className='flex flex-col gap-[5px] w-full max-w-[500px]'>
        <div className='bg-slate-600 rounded-sm relative'>
        <img src="icon-search.svg" className='absolute opacity-60 w-5 h-5 pt-1 pl-1'/>
          <input type="text" placeholder="Enter city name" className='p-1 pl-6 w-full rounded-sm outline-none focus:ring-1 focus:ring-white/60' />
        </div>
        <button className='bg-indigo-600 p-1 rounded-sm hover:bg-indigo-900'>Search</button>
        <div className="p-3 flex flex-col items-center bg-[url('/bg-today-small.svg')] bg-center bg-cover rounded-xl h-max-[250px] aspect-[1.2/1] min-[350px]:bg-[url('/bg-today-large.svg')] min-[350px]:aspect-3/1 min-[400px]:flex-row min-[400px]:justify-between min-[400px]:p-6">
          <div>
            <h2 className='text-lg font-bold '>London, Great Britain</h2>
            <p className='text-md font-semibold'>Tuesday, 25.02.2026</p>
          </div>
          <div className='flex justify-between items-center'>
            <img src="/icon-sunny.webp" alt="icon" className="h-20" />
            <p className="text-5xl text-indigo-50 font-semibold italic">11°C</p>
          </div>
        </div>
        <div className="flex gap-2 w-full">
        <div className='bg-slate-600 p-5 rounded-2xl w-full'>
          <p className=''>Humidity:</p>
          <p className='text-2xl'>20%</p>
        </div>
        <div className='bg-slate-600 p-5 rounded-2xl w-full'>
          <p className=''>Wind:</p>
          <p className='text-2xl'>22 km/h</p>
        </div>
      </div>
      </div>
      
      
    </div>
  );
}

export default App
