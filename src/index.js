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
  
 



/*


getInstance()
  .then(d2 => {
      console.log(d2.currentUser.name); // give current user
    // d2.models.organisationUnit.get('v8EzhiynNtf').then(organisationUnitModel => console.log(organisationUnitModel.name));
     
    /* d2.models.organisationUnit.list({ paging: false }).then(organisationUnitCollection => { 
      let organisationUnitsm = [...organisationUnitCollection.values()]

      organisationUnitsm.forEach(function(organisationUnitsm) {
       console.log("organisationUnits-----"+organisationUnitsm.name+" "+organisationUnitsm.code);
     });
       
    }); 
     d2.models.organisationUnit .filter().on('level').equals(2).list() .then(
         organisationUnitCollection => 
         console.log(organisationUnitCollection));

         
     d2.models.organisationUnit .filter().on('level').equals(2) .list()
     .then(organisationUnitCollection => { 
        let organisationUnits = organisationUnitCollection.toArray()
        let organisationUnitsm = [...organisationUnitCollection.values()]
        console.log("organisationUnits-----"+organisationUnitsm[0].name+" "+organisationUnitsm[0].code);
     }); 
         

     const organisationUnitsOnLevel3 = d2.models.organisationUnit //.filter().on('level').equals(3);
     const organisationUnitsOnLevel3WithParent = organisationUnitsOnLevel3 .filter().on('parent.id').equals('b3vBdsycgAD');
     organisationUnitsOnLevel3.list({ paging: false }).then(organisationUnitCollection => { 
       let organisationUnitsm = [...organisationUnitCollection.values()]

       var myJsonString = JSON.stringify(organisationUnitsm);

       organisationUnitsm.forEach(function(organisationUnitsm) {
        console.log("organisationUnits-----"+organisationUnitsm.name+" "+organisationUnitsm.code);
      });
        
     }); 
    // console.log("organisationUnits-----"+organisationUnitsOnLevel3WithParent[0].name+" "+organisationUnitsOnLevel3WithParent[0].code); 
  });*/