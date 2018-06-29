import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { init } from 'd2/lib/d2';
import { getInstance } from 'd2/lib/d2';


let baseUrl = (window.location.href).split("api");
let newbaseUrl=baseUrl[0]+"/api";

console.log("baseUrl----"+baseUrl[0]+"/api");

init({ baseUrl: newbaseUrl })
  .then(d2 => {
    //Your d2 is initialised and ready to use.
    console.log("Your d2 is initialised and ready to use.")
  });
 getInstance()
      .then(d2 => {
          console.log(d2.currentUser.name); // Will log when the init() function is done initialising the instance
      });



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
