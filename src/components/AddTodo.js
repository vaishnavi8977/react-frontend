import React, { Component } from 'react'
import '../App.css';

export class AddTodo extends Component {
    state = {
        title:''
    }
    onChange = (e) => this.setState({ [e.target.name]:e.target.title}
    );
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState ({title:''});
    } 
  render() {
    return (
      <form onSubmit = {this.onSubmit} style={{ display: 'flex' }}>
        <input type='text' 
        style ={{ flex:10, padding:"5px" }} 
        name='title'
         placeholder='Add TOdo ..'
         value = {this.state.title}
         onChange={this.onChange} ></input>
        <input type = 'submit' value="submit"
        className ="btn"
        style = {{flex: 1}}
        />
    
      </form>
    )
  }
}

export default AddTodo
