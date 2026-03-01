import { useState } from 'react'
import './index.css' 
function App() {
  return (
    <div className='flex flex-col justify-center items-center p-2 gap-0.5'>
      <h1 className='text-lg w-fit md:text-2xl'>Weather Now</h1>
      <div className='flex flex-col gap-[5px] w-full max-w-[500px]'>
        <div className='bg-slate-600 rounded-sm relative'>
        <img src="icon-search.svg" className='absolute opacity-60 w-5 h-5 pt-1 pl-1'/>
          <input type="text" placeholder="Enter city name" className='p-1 pl-6 w-full  rounded-sm outline-none focus:ring-1 focus:ring-white/60' />
        </div>
        <button className='bg-indigo-600 p-1 rounded-sm hover:bg-indigo-900'>Search</button>
      </div>
        <div className="weather-card">
          <h2>London, Great Britain</h2>
          <img src="" alt="icon" className="weather-icon" />
          <p className="temperature">11°C</p>
          <p className="condition">rainy</p>
          <div className="weather-details">
            <p>Humidity: 20%</p>
            <p>Wind: 22 km/h</p>
          </div>
        </div>
    </div>
  );
}

export default App
