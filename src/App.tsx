import { useState, useEffect } from 'react'
import './index.css' 
const key = 'fec76df21593484e9a8142548260103'

interface IWeatherData{
  location: {
    name: string;
    country: string;
    region: string;
  };
  current:{
    temp_c: number;
    temp_f: number;
    is_day: 0|1, 
    feelslike_c: number;
    humidity: number;
    wind_kph: number;
    condition: {
      text: string;
      code: number
    } 
  }
}
function getDayOfWeek(n: ReturnType<Date['getDay']>){
  switch(n){
    case 0: 
      return 'Sunday'
      break
    case 1: 
      return 'Monday'
      break
    case 2: 
      return 'Tuesday'
      break
    case 3: 
      return 'Wednesday'
      break
    case 4: 
      return 'Thusday'
      break
    case 5: 
      return 'Friday'
      break
    case 6: 
      return 'Saturday'
      break
  }
}
function getIcon(n: number): string{
  if (n == 1000){
    return '/icon-sunny.webp'
  }else if (n==1003){
    return '/icon-partly-cloudy.webp'
  }else if (n==1006 || n==1009){
    return '/icon-overcast.webp'
  }else if ([1063, 1072, 1150, 1153, 1168, 1171].includes(n)){
    return '/icon-drizzle.webp'
  }else if ([1030, 1135, 1147].includes(n)){
    return '/icon-fog.webp'
  }else if ([1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246].includes(n)){
    return '/icon-rain.webp'
  }else if ([1066, 1069, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1249, 1252, 1255, 1258, 1261, 1264].includes(n)){
    return '/icon-snow.webp'
  }else if ([1087, 1273, 1276, 1279, 1282].includes(n)){
    return '/icon-storm.webp'
  }else{
    return'/icon-sunny.webp'
  }
  
}
function App() {
  const [city, setCity] = useState('Yaroslavl')
  const[date, setDate]=useState(new Date)
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null)
  const [error, setError] = useState('')
  useEffect(()=>{
      async function getData() {
      try{
      const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`);
      if(!res.ok){
        throw new Error(`No mathcing location found`)
      }
      const data = await res.json()
      setWeatherData(data);
      console.log(data)
      setDate(new Date());
      setError('')
      } 
      catch (err){
        if (err instanceof Error ){
          setError(err.message)
          setWeatherData(null)
        }
      
      }
    } 
  getData()
  }, [])
  

  return (
    <div className='flex flex-col justify-center items-center p-2 gap-0.5'>
      <h1 className='text-lg w-fit md:text-2xl'>Weather Now</h1>
      <p className='text-indigo-300'>{error}</p>
      <div className='flex flex-col gap-1.25 w-full max-w-125'>
        <div className='bg-slate-600 rounded-sm relative'>
        <img src="icon-search.svg" className='absolute opacity-60 w-5 h-5 pt-1 pl-1'/>
          <input type="text" placeholder="Enter city name" className='p-1 pl-6 w-full rounded-sm outline-none focus:ring-1 focus:ring-white/60' />
        </div>
        <button className='bg-indigo-600 p-1 rounded-sm transition-all hover:bg-indigo-900'>Search</button>
        
        {weatherData && (
          <div className='flex flex-col gap-1'>
            <div className="p-3 flex flex-col items-center bg-[url('/bg-today-small.svg')] hover:brightness-75 bg-center bg-cover rounded-xl h-max-[250px] aspect-[1.2/1] min-[350px]:bg-[url('/bg-today-large.svg')] min-[350px]:aspect-3/1 min-[450px]:flex-row min-[450px]:justify-between min-[450px]:p-6">
              <div>
                <h2 className='text-lg font-bold '>{weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</h2>
                <p className='text-md font-semibold'>{getDayOfWeek(date.getDay())}, {date.getDate()}.{date.getMonth()+1}.{date.getFullYear()}</p>
              </div>
              <div className='flex flex-col items-center'>
                <div className='flex justify-between items-center'>
                  <img src={getIcon(weatherData.current.condition.code)} alt="icon" className="h-20" />
                  <p className="text-5xl text-indigo-50 font-semibold italic">{weatherData.current.temp_c}°C</p>
                </div>
                <p className='font-semibold text-lg'>{weatherData.current.condition.text}</p>
              </div>
            </div>
            <div className="flex gap-2 w-full flex-wrap">
              <div className='bg-slate-600 p-5 rounded-xl flex-1 min-w-30 transition-all hover:bg-slate-700'>
                <p className=''>Humidity:</p>
                <p className='text-2xl'>{weatherData.current.humidity}%</p>
              </div>
              <div className='bg-slate-600 p-5 rounded-xl flex-1 min-w-30 transition-all hover:bg-slate-700'>
                <p className=''>Wind:</p>
                <p className='text-2xl'>{weatherData.current.wind_kph} km/h</p>
              </div>
              <div className='bg-slate-600 p-5 rounded-xl flex-1 min-w-30 transition-all hover:bg-slate-700'>
                <p>Feels like:</p>
                <p className='text-2xl'>{weatherData.current.feelslike_c}°C</p>
              </div>
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default App
