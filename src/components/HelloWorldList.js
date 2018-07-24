import React,{Component} from 'react';
import './HelloWorldList.css'

import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';
import Treeview from './Treeview/treeview'



class HelloWorldList extends Component{
    constructor(props){
        super(props);
        this.state={greeting:['Jim','sally']}
        this.addGreeting =this.addGreeting.bind(this);
        this.removeGreeting=this.removeGreeting.bind(this)
    }
    addGreeting (newName){
        this.setState({greeting:[...this.state.greeting,newName]})
    }
    removeGreeting(removeName){
        const filteredGreeting=this.state.greeting.filter(name=>{
            return name!==removeName
        })
        this.setState({greeting:filteredGreeting})
    }
    renderGreetings(){
        return this.state.greeting.map(name=>(
            <HelloWorld key={name} name={name}
          removeGreeting={this.removeGreeting}
          />
        ))
    }
    
    render(){
        return (
            <div className='MainPage'>
               <Treeview/>
                <AddGreeter addGreeting={this.addGreeting}/>
                {this.renderGreetings()}         
            </div>
        )
    }
}

export default HelloWorldList;