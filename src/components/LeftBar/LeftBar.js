import React from 'react';
import {Link} from 'react-router-dom'
import './LeftBar.css'

const LeftBar=()=>(
  <header className='LeftBar'>
    <nav>
      <ul className='list'>
        <li><Link to='/'><span class="glyphicon glyphicon-home"></span></Link></li>
        <li><Link to='/LockException'>Lock Exception</Link></li>
      </ul>
    </nav>
  </header>
)

export default LeftBar;