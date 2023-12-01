import hot from './assets/hot.png';
import cold from './assets/cold.png';
import Descriptions from './components/Descriptions/Descriptions';
import { useCallback, useEffect, useState } from 'react';
import { formatData } from './weatherService';

function App() {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('imperial');
  const [city, setCity] = useState('new york city');
  const [background, setBackground] = useState(cold)

  
  useEffect(() => {
    const fetchData = async () => {
      const data = await formatData(city, units);
      setWeather(data);

      const bgChange = units === 'metric' ? 20 : 60;
      if (data.temp <= bgChange){
        setBackground(cold)
      } else {
        setBackground(hot)
      }
    };

    fetchData();
  }, [units, city]);

  const unitClick = (e) => {
    const btn = e.currentTarget;
    const currentUnit = btn.innerText.slice(1)
    const Farenheight = currentUnit === 'F';
    btn.innerText = Farenheight ? '°C' : '°F';
    setUnits(Farenheight ? 'imperial' : 'metric')
  }

  const enterKey = (e) => {
    if (e.keyCode === 13){
      setCity(e.currentTarget.value);
      e.currentTarget.blur()
    }
  }


  return (
    <div className="app" style={{backgroundImage: `url(${background})`}}>
      <div className='overlay'>
        {
          weather && (
            <div className='container'>
            <div className='section section_inputs'>
              <input onKeyDown={enterKey} type='text' name='city' placeholder='Enter City Here...'/>
              <button onClick={(e) => unitClick(e)}>°C</button>
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
