import React from 'react'
import NavBar from '../utility/Navbar/NavBar'
import './index.css'
import PieChart_ from './charts/PieChart'

import BarChart_ from './charts/BarChart'
import SellsChart from './charts/SellsChart'
import CombineJson from '../CombineJson/Index'
const Statistics = () => {

  return (
    <div className='Statistics-main'>
      <NavBar></NavBar>
      <div className='parent'>
        <BarChart_ />
        <PieChart_ />
        <SellsChart />
        <CombineJson />
      </div>
    </div>
  )
}

export default Statistics