import React from 'react';
import {Link} from 'react-router-dom'
import './LeftBar.css'
import ViewTree from '../Treeview/ViewTree'

const LeftBar=()=>(
  <header className='LeftBar'>
    <div className='topcorner'><Link to='/'><span class="glyphicon glyphicon-home"></span></Link></div>
    <nav>
      <ul className='list'>
         <li ><Link to='/LockException'>Lock Exception</Link></li>
        </ul>
    </nav>
    <div>
    <ViewTree/>
    </div>
    
  </header>
)

export default LeftBar;