import { useState } from 'react'
import './App.css'
import background from "../src/assets/background.png"
import { useQueries } from '@tanstack/react-query'
import { fetchKlekove, fetchKolelo, fetchKoremni, fetchLicevi } from './helper'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className=' flex flex-row  overflow-hidden justify-between px-6 w-full h-full bg-[#262626]' style={{ height: '100vh', backgroundImage: `url(${background})`, backgroundSize: 'cover' }} >
      <form action='http://3.77.19.140:3000/leaderboard/' method='POST'>
        <input required id='name' name='name' placeholder="name" type='text' />
        <input required id='score' name='score' placeholder='score' type='text' />
        <select id='type' name='type'>
          <option value='klekove'>klekove</option>
          <option value='kolelo'>kolelo</option>
          <option value='koremni'>koremni</option>
          <option value='licevi'>licevi</option>
        </select>
        <input type='submit' />
      </form>
    </div>
  )
}

export default App
