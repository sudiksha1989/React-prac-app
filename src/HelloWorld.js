import React,{Component} from 'react';
import './HelloWorld.css'
import { getInstance } from 'd2/lib/d2';


class HelloWorld extends Component{
  constructor (props){
    super(props);
    this.state={greeting:'hello--'}
    //this.frenchify=this.frenchify.bind( this)
    //this.removeGreeting =this.removeGreeting .bind(this);
  }
  frenchify(){
    var username;
    getInstance()
      .then(d2 => {
        username=d2.currentUser.name
          console.log(d2.currentUser.name); 
          this.setState({greeting:username})
         });
    
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