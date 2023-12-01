const API_KEY='26f05dc9059defba61a81f1cbd6b1f02';

const getIcon = (iconId) => {
  return `https://openweathermap.org/img/wn/${iconId}@2x.png`
}

const formatData = async (city, units = 'metric') => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
  
  const data = await fetch(URL)
  .then(res => res.json())
  .then(data => data);

  const {
    weather,
    main:{temp, feels_like, temp_min, temp_max, pressure, humidity},
    wind:{speed},
    sys:{country},
    name
  } = data

  const {description, icon} = weather[0]

  return {
    description, iconURL: getIcon(icon), temp, feels_like, temp_min, temp_max, pressure, humidity, speed, country, name
  }
};

export {formatData};