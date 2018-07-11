import React,{Component} from 'react';
import './HelloWorld.css'
import { getInstance } from 'd2/lib/d2';


        
class HelloWorld extends Component{
  constructor (props){
    super(props);
   
   
    this.state={greeting:'hello--',hierarchy:[]}
    //this.frenchify=this.frenchify.bind( this)
   
    
  }
  frenchify(){
    var username;
    getInstance()
      .then(d2 => {
        username=d2.currentUser.name
          console.log(d2.currentUser.name); 
          this.setState({greeting:username})
          var buildHierarchy =this.buildHierarchy();
          this.setState({hierarchy:buildHierarchy})
         console.log("buildHierarchy-----"+buildHierarchy)
         });
    
  }
  removeGreeting(){
    this.props.removeGreeting(this.props.name)
        
  }


  buildHierarchy() {
    var arry = [
      {"Id": "1", "Name": "abc", "Parent": "2"},
      {"Id": "2", "Name": "abc", "Parent": ""},
      {"Id": "3", "Name": "abc", "Parent": "5"},
      {"Id": "4", "Name": "abc", "Parent": "2"},
      {"Id": "5", "Name": "abc", "Parent": ""},
      {"Id": "6", "Name": "abc", "Parent": "2"},
      {"Id": "7", "Name": "abc", "Parent": "6"},
      {"Id": "8", "Name": "abc", "Parent": "6"}
    ];
    var roots = [], children = {};

    // find the top level nodes and hash the children based on parent
    for (var i = 0, len = arry.length; i < len; ++i) {
        var item = arry[i],
            p = item.Parent,
            target = !p ? roots : (children[p] || (children[p] = []));

        target.push({ value: item });
    }

    // function to recursively build the tree
    var findChildren = function(parent) {
        if (children[parent.value.Id]) {
            parent.children = children[parent.value.Id];
            for (var i = 0, len = parent.children.length; i < len; ++i) {
                findChildren(parent.children[i]);
            }
        }
    };

    // enumerate through to handle the case where there are multiple roots
    for (var i = 0, len = roots.length; i < len; ++i) {
        findChildren(roots[i]);
    }

    return roots;
}




  render(){
    return (
    <div className='HelloWorld'>
    {this.state.greeting} {this.props.name}!
    <br/>
    <div className='hierarchy'>
     <ul id="tea" class="demo1">
      <li>Coffee</li>
      <li>Tea
        <ul>
        <li>Black tea</li>
        <li>Green tea</li>
        </ul>
      </li>
      <li>Milk</li>
    </ul>
    </div>
    <br/>
    <button onClick={this.frenchify.bind( this)}>frenchify</button>
    <br/><br/>
    <button onClick={this.removeGreeting.bind( this)}>Remove me</button>
    </div>)
   
  }
  
} 
export default HelloWorld;