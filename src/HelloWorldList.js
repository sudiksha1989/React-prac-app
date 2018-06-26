import React,{Component} from 'react';
import './HelloWorldList.css'

import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';



class HelloWorldList extends Component{
    constructor(props){
        super(props);
        this.state={greeting:['Jim','Sally','Bender']}
        this.addGreeting =this.addGreeting.bind(this);
    }
    addGreeting (newName){
        this.setState({greeting:[...this.state.greeting,newName]})
    }
    renderGreetings(){
        return this.state.greeting.map(name=>(
            <HelloWorld key={name} name={name}/>
        ))
    }
    render(){
        return (
            <div className='HelloWorldList'>
                <AddGreeter AddGreeter={this.addGreeting}/>
                {this.renderGreetings()}         
            </div>
        )
    }
}

export default HelloWorldList;