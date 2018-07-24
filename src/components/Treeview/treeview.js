import React,{Component} from 'react';
import DropdownTreeSelect from "react-dropdown-tree-select";
import "./treeview.css";
import data from "./data.json";
import { getInstance } from 'd2/lib/d2';


class Treeview extends React.Component {




  constructor(props) {
    super(props);

    const d2 = props.d2;
		this.state = {
			d2: d2,
			data: [
        {'id':1 ,'parentid' : 0},
        {'id':4 ,'parentid' : 2},
        {'id':3 ,'parentid' : 1},
        {'id':5 ,'parentid' : 0},
        {'id':6 ,'parentid' : 0},
        {'id':2 ,'parentid' : 1},
        {'id':7 ,'parentid' : 4},
        {'id':8 ,'parentid' : 1},
        {'id':9 ,'parentid' : 4},
        {'id':10 ,'parentid' : 9},
        {'id':11 ,'parentid' : 10},
        {'id':12 ,'parentid' : 11},
        {'id':13 ,'parentid' : 12},
        {'id':14 ,'parentid' : 13}
        
      ],
			tree: [],
			preRoot: undefined
		};
    
   console.log("treeview"+d2.currentUser.name);
    const organisationUnitsOnLevel3 = d2.models.organisationUnit.filter().on('level').equals(8);
    organisationUnitsOnLevel3.list({ paging: false }).then(organisationUnitCollection => { 
      let organisationUnitsm = [...organisationUnitCollection.values()]
      console.log('*(, optionalParams')
     });
     this.unflatten(this.state.data)
    }

 unflatten(arr) {
  var tree = [],
      mappedArr = {},
      arrElem,
      mappedElem;

  // First map the nodes of the array to an object -> create a hash table.
  for(var i = 0, len = arr.length; i < len; i++) {
    arrElem = arr[i];
    mappedArr[arrElem.id] = arrElem;
    mappedArr[arrElem.id]['children'] = [];
  }


  for (var id in mappedArr) {
    if (mappedArr.hasOwnProperty(id)) {
      mappedElem = mappedArr[id];
      // If the element is not at the root level, add it to its parent array of children.
      if (mappedElem.parentid) {
        mappedArr[mappedElem['parentid']]      ['children'].push(mappedElem);
      }
      // If the element is at the root level, add it to first level elements array.
      else {
        tree.push(mappedElem);
      }
    }
  }
  this.state({tree}) ;
}



  render() {
    
    return (
      <div>
        {JSON.stringify(this.state.tree, null, " ")}
      </div>
    )
  }
}


export default Treeview;


  //console.log(flatData)
/*
class Treeview extends Component {

  constructor(props) {
    super(props);
    var arrr=[];
      vargetInstance().then(d2 => {
            console.log("treeview"+d2.currentUser.name);
            const organisationUnitsOnLevel3 = d2.models.organisationUnit//.filter().on('level').equals(8);
            organisationUnitsOnLevel3.list({ paging: false }).then(organisationUnitCollection => { 
            let organisationUnitsm = [...organisationUnitCollection.values()]
              organisationUnitsm.forEach(function(organisationUnitsm) {
                if(organisationUnitsm.parent==undefined)
                  arrr.push({'id':organisationUnitsm.id,'parentid':''})
                else
                arrr.push({'id':organisationUnitsm.id,'parentid':organisationUnitsm.parent.id})
          });
        });
  
     })
  
    this.state = {'orgunit':arr,'hierarchy':''};
    this.frenchify = this.unflatten( this.state.orgunit);

    
  }

  gethierar

 unflatten(arr) {
  var tree = [],
      mappedArr = {},
      arrElem,
      mappedElem;


      
  // First map the nodes of the array to an object -> create a hash table.
  for(var i = 0, len = this.state.length; i < len; i++) {
    arrElem = this.state[i];
    mappedArr[arrElem.id] = arrElem;
    mappedArr[arrElem.id]['children'] = [];
  }


  for (var id in mappedArr) {
    if (mappedArr.hasOwnProperty(id)) {
      mappedElem = mappedArr[id];
      // If the element is not at the root level, add it to its parent array of children.
      if (mappedElem.parentid) {
        mappedArr[mappedElem['parentid']]['children'].push(mappedElem);
      }
      // If the element is at the root level, add it to first level elements array.
      else {
        tree.push(mappedElem);
      }
    }
  }
  this.setState({'hierarchy':this.frenchify});
}
gethierarchy();


  render() {
    
    const data =tree;
    return (
      <div>
        {JSON.stringify(data, null, " ")}
      </div>
    )
  }
}


export default Treeview;





/*
getInstance().then(d2 => {
      console.log("treeview"+d2.currentUser.name);
      const organisationUnitsOnLevel3 = d2.models.organisationUnit.filter().on('level').equals(8);
      organisationUnitsOnLevel3.list({ paging: false }).then(organisationUnitCollection => { 
       let organisationUnitsm = [...organisationUnitCollection.values()]
         organisationUnitsm.forEach(function(organisationUnitsm) {
        console.log("organisationUnits-----"+organisationUnitsm.name+" "+organisationUnitsm.level);
      });
        
     });
    })
function flatten(array, depth) {
  return array.reduce((p, c, i, a) => {
    if (c.children) {
        const item = {name: c.name, depth: depth};
        const flatChildren = flatten(c.children, depth + 1);
        return p.concat([item]).concat(flatChildren);
    } else {
        const item = {name: c.name, depth: depth};
        return p.concat([item]);
    }
  }, [])
}

const flatData = flatten(data, 1);

class Treeview extends React.Component {
  render() {
    
    const data =flatData;
    return (
      <div>
      <ul>
        {data.map((item, i) => {
          let styleObj = {paddingLeft: (item.depth - 1) * 20};
          return (
            <li key={i} style={styleObj}>{item.name}</li>
          )
        })}
      </ul>
      </div>
    )
  }
}


export default Treeview;































/*import React from "react";
import { render } from "react-dom";
import DropdownTreeSelect from "react-dropdown-tree-select";
import "./treeview.css";
import data from "./data.json";

const onChange = (currentNode, selectedNodes) => {
  console.log("path::", currentNode.path);
};

const assignObjectPaths = (obj, stack) => {
  Object.keys(obj).forEach(k => {
    const node = obj[k];
    if (typeof node === "object") {
      node.path = stack ? `${stack}.${k}` : k;
      assignObjectPaths(node, node.path);
    }
  });
};

const Treeview = () => {
  assignObjectPaths(data);

  return (
    <DropdownTreeSelect
      data={data}
      onChange={onChange}
      className="bootstrap-demo"
    />
  );
};


export default Treeview;*/

//render(<App />, document.getElementById("root"));
