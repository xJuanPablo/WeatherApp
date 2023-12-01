import hot from './assets/hot.png';
import cold from './assets/cold.png';
import Descriptions from './components/Descriptions/Descriptions';
import { useEffect, useState } from 'react';
import { formatData } from './weatherService';

function App() {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('imperial');

  
  useEffect(() => {
    const fetchData = async () => {
      const data = await formatData('belton', units);
      setWeather(data);
    };

    fetchData();
  }, [units]);

  const unitClick = (e) => {
    const btn = e.currentTarget;
    const currentUnit = btn.innerText.slice(1)
    const Farenheight = currentUnit === 'F';
    btn.innerText = Farenheight ? '°C' : '°F';
    setUnits(Farenheight ? 'imperial' : 'metric')

  }


  return (
    <div className="app" style={{backgroundImage: `url(${cold})`}}>
      <div className='overlay'>
        {
          weather && (
            <div className='container'>
            <div className='section section_inputs'>
              <input type='text' name='city' placeholder='Enter City Here...'/>
              <button onClick={(e) => unitClick(e)}>°F</button>
            </div>
            <div className='section section_temperature'>
              <div className='icon'>
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconURL} alt='placeholder'></img>
                <h3>{`${weather.description}`}</h3>
              </div>
              <div className='temp'>
                <h2>{`${weather.temp.toFixed()} °${units === 'metric' ? 'C' : 'F'}`}</h2>
              </div>
            </div>
            <Descriptions weather={weather} units={units}/>
          </div>
          )
        }
      </div>
    </div>
  );
};

export default App;
