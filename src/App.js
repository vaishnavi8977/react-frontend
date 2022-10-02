//import logo from './logo.svg';
import { Component } from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

import Todos from './components/Todos';

class App extends Component{
  state = {
    todos:[
      {
        titile:"take out the trash",
        id: uuidv4(),
        completed: true
  },
  {
    titile:"dinner with wife",
    id: uuidv4(),
    completed: false
},
{
  titile:"meeting with Boss",
  id: uuidv4(),
  completed: false
},
]
  }
  
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    } 
      )})

  }

  del = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id) 
    ]})
  }
  addTodo =(title)=> {
    const newTodo = {
      id:uuidv4(),
      title: title,
      completed:false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }
  render(){
  
    return(
      <div className='App'>
        <div className='container'>
        <Header />
        <AddTodo addTodo ={this.addTodo} />
        <Todos  todos={this.state.todos} markComplete = {this.markComplete} 
        del ={this.del}
        />
        </div>
      </div>
    );
  }
}

export default App;
