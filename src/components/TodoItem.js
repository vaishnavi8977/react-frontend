import React, { Component } from 'react'
import { PropTypes } from  'prop-types'

export class TodoItem extends Component {
  getStyle = () => {
    if(this.props.todo.completed){
      return{
        textDecoration: 'line-through',
        backgroundColor: 'red'
      }
    }
    else{
      return{
      textDecoration: 'none',
      backgroundColor: 'gray',
      color:'black'
    }
  }
}
    

  render() {
    const {id, titile} = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}></input>
          {titile}
          <button style= {btnStyle} onClick={this.props.del.bind(this, id)}>x</button>
          </p>
      </div>
    )
  }
}

// Proptypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  backgroundColor : 'yellow',
  color : 'red',
  border : 'none',
  padding : '5px 9px',
  cursor: 'pointer',
  float: 'right',
  borderRadius: '50%',
}


export default TodoItem