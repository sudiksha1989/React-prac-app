import React,{Component} from 'react';
import './HelloWorld.css'
import d2 from 'd2/lib/d2';
import HeaderBar from '@dhis2/d2-ui-header-bar';
// Using CommonJS imports
//var d2 = require('d2/lib/d2');
import { init } from 'd2/lib/d2';
import { getInstance } from 'd2/lib/d2';


init({ baseUrl: 'http://88.80.191.115:29014/mh_revamping/api/' })
  .then(d2 => {
    //Your d2 is initialised and ready to use.
    console.log("Your d2 is initialised and ready to use.")
  });
 getInstance()
      .then(d2 => {
          console.log(d2.currentUser.name); // Will log when the init() function is done initialising the instance
      });


   

      export default function(props) {
          return (<HeaderBar d2={props.d2}/>)
      }


class HelloWorld extends Component{
  constructor (props){
    super(props);
    this.state={greeting:'hello--'}
    //this.frenchify=this.frenchify.bind( this)
    //this.removeGreeting =this.removeGreeting .bind(this);
  }
  frenchify(){
    this.setState({greeting:'Bonjour'})
  }
  removeGreeting(){
    this.props.removeGreeting(this.props.name)
  }
  render(){
    return (
    <div className='HelloWorld'>
    {this.state.greeting} {this.props.name}!
    <br/>
    <button onClick={this.frenchify.bind( this)}>frenchify</button>
    <br/><br/>
    <button onClick={this.removeGreeting.bind( this)}>Remove me</button>
    </div>)

  }
  
} 
export default HelloWorld;