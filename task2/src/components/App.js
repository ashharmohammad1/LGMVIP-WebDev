import Users from './Usercard.js';
import './App.css';

import React, { Component } from 'react'
	
class App extends Component {
  constructor(props){
	super(props)
		
	this.state = {starting: true, users_data :[], loading : false                
  }
  

	this.updateState = this.updateState.bind(this)
  }
    
  updateState(){
    this.setState({starting:false,loading:true})
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({starting:false, users_data :users.data, loading: false
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
  render(){
    return (<>
      <nav className="navbar navbar-dark bg-dark App">
        <h1>Welcome VR Website </h1>
        <button type="button" className="btn btn-primary btn-lg" onClick={this.updateState}>Get Users</button>
    </nav>
        <div className="container">
          {
            this.state.starting? (<h2 className="Container"> Click on "Get Users" to load data </h2>
            ):<Users loading={this.state.loading} users={this.state.users_data}/>
          }
         </div>
    </>
    )
  }
}
	
export default App;