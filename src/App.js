import React, { Component } from 'react'
import GeneralInfo from './Components/GeneralInfo'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
          name:'',
      }
    }

  
  handleChange=(e)=>{
    const newValue=e.target.value
    this.setState({
        name:newValue
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault()
  }
    
  render() {
    return (
      <>
      <div>
        
          <input onChange={this.handleChange}  id='name' type='text' placeholder='Enter full name' />
          <input onSubmit={this.handleSubmit} type='submit'/>
          <GeneralInfo  data={this.sendDataToChild}/>
        
      </div>
      
      </>
      
      
    )
  }
  }
  // <input id='email' type='email' placeholder='Enter Email' />
          
  // <input id='phone' type='text' placeholder='Enter Phone number' />
  // <input id='location' type='text' placeholder='Enter Location' />
  // <input id='gitHub' type='text' placeholder='Enter Github' />
