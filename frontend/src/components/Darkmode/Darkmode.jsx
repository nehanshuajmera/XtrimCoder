import React, { useContext, useState } from 'react'
import DarkmodeContext from '../../context/DarkmodeContext';
import './darkmode.css'

export default function Darkmode() {
    const { isChecked, handleOnChange} = useContext(DarkmodeContext);    
  return (
    <div>
        <div>
    <input type="checkbox" class="checkbox" id="checkbox" checked={isChecked} onChange={handleOnChange}/>
  <label htmlFor="checkbox" class="label">
  <i class='fas fa-sun'></i>
    <i class="fas fa-moon"></i>
    <div class='ball'/>
  </label>
  </div>
    </div>
  )
}
