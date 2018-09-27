import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {MemoryRouter} from 'react-router-dom';

import { init } from 'd2/lib/d2';

let baseUrl = (window.location.href).split("api");
let newbaseUrl=baseUrl[0]+"/api";

console.log("baseUrl----"+newbaseUrl[0]+"/api");

init({ baseUrl: newbaseUrl })
  .then(d2 => {
    ReactDOM.render(<MemoryRouter><App d2={d2}/></MemoryRouter>, document.getElementById('root'));
    registerServiceWorker();
    console.log("Your d2 is initialised and ready to use.")
      }) 
      .catch(err => console.error(err));
  
 


