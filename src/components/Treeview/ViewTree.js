import React,{Component} from 'react';
import "./ViewTree.css";
import Tree from './components/tree';

class ViewTree extends React.Component {


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
                <Tree data={orgUnits}
                           onToggle={this.onToggle} />
    )
  }
}


export default ViewTree;


// WEBPACK FOOTER //
// ./src/components/Treeview/ViewTree.js