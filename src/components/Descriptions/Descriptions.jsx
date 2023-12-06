import React from 'react';
import './descriptions.css'
import {FaWind} from "react-icons/fa";
import {BiHappy} from "react-icons/bi";
import {MdOutlineWaterDrop} from "react-icons/md";

const Descriptions = ({weather, units}) => {

  const tempUnit = units ==='metric' ? '°C' : '°F';
  const windUnit = units ==='metric' ? 'm/s' : 'm/h'

  const descriptionInfo = [
    {
      id: 1,
      icon: <BiHappy/>,
      title: 'Feels Like',
      data: weather.feels_like.toFixed(),
      unit: tempUnit
    },
    {
      id: 2,
      icon: <MdOutlineWaterDrop/>,
      title: 'humidity',
      data: weather.humidity,
      unit: '%'
    },
    {
      id: 3,
      icon: <FaWind/>,
      title: 'wind speed',
      data: weather.speed.toFixed(),
      unit: windUnit
    }
  ]

  return (
    <div className='section section_description'>
      {descriptionInfo.map(({id, icon, title, data, unit}) => (
        <div key={id} className='description_card'>
          <div className='description_card_icon'>
            {icon}
            <small>{title}</small>
          </div>
          <h2> {`${data} ${unit}`} </h2>
        </div>
      ))}
    </div>
  )
}

export default Descriptions