import React from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link }  from 'react-router-dom'
import { postRegisteredChild } from '../apis/api';




class  ChildRegister  extends React.Component{
  constructor(props){
    super(props)
    this.state={
      first_name:'',
      last_name:'',
      date_of_birth:'',


    };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(e){
      this.setState({[e.target.name]: e.target.value});
    }
  
    handleSubmit(e){
      var child = this.state 
      postRegisteredChild(child)
      // event.preventDefault()
    }
    
    
    
  
    
  
  render (){
  return(
    <div>
      <h1></h1>
      <br/>
      <br/>
           <form>
             <h1>Register your child</h1>
            <label htmlFor="">
            First name:
            <input type="text" name='first_name' value={this.updateState} onChange={this.handleChange} />
            Last name:
            <input type="text" name='last_name' value={this.updateState} onChange={this.handleChange} />
            Date of birth:
            <input type="text" name='date_of_birth' value={this.updateState} onChange={this.handleChange} />
            </label>
            <Link to='/parent/home'><button onClick={this.handleSubmit}>Add a child</button></Link>
            </form>
    </div>
  )
}

}
export default ChildRegister