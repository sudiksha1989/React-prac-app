import React,{Component} from 'react';
import "./treeview.css";
import TreeBeard from '../treebeard/components/treebeard';

class Treeview extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
        error: null,
        error1: null,
        isLoaded: false,
        orgUnits: [],
        orgUnitName: '',
        orgUnitID: '',
        levels: undefined
    }
    this.onToggle = this.onToggle.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
}

componentDidMount() {
    let url = '../../../api/organisationUnits.json?paging=false&level=2&fields=id,name';
    fetch("../../../api/organisationUnitLevels.json",{
        credentials: 'include'
    })
    .then (response => response.json())
    .then (
        (result) => {
            let levels = result.pager.total;
            this.setState({
                levels: levels
            })
            for (let i = 1; i < levels-1; i++) {
                url += ',children[id,name';
            }
            url += ']';
            fetch(url,{
                credentials:'include'
            })
            .then(response => response.json())
            .then(
                (result1) => {
                    result1.organisationUnits[0].toggled = true;
                    this.setState({
                    isLoaded: true,
                    orgUnits: result1.organisationUnits,
                    });
                },
                (error1) => {
                    this.setState({
                        isLoaded: true,
                        error1
                    });
                }    
            )
        },
        (error) => {
            this.setState({
                error
            });
        }
    )
}

onToggle(node, toggled) {
    if(this.state.cursor){this.state.cursor.active = false;}
    node.active = true;
    this.setState({
        orgUnitName: node.name,
        orgUnitID: node.id
    });

    if(node.children){ node.toggled = toggled; }
    this.setState({ cursor: node });
}

openSidebar() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

closeSidebar() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

  render() {
    const { error, error1, isLoaded, orgUnits, orgUnitName, orgUnitID, levels} = this.state;
       
   return (
    (error || error1) ? <div>{error.message}</div> :
                (!isLoaded) ? <div>Loading...</div> :
                <TreeBeard data={orgUnits}
                           onToggle={this.onToggle} />
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
      getInstance().then(d2 => {
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



// WEBPACK FOOTER //
// ./src/components/Treeview/treeview.js