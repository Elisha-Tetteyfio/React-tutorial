import React from "react"

class TodoItem extends React.Component {
  render() {
    return(
      <li>
        <input 
          type="checkBox" 
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        /> 
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
          delete
        </button>
        {this.props.todo.title}
      </li>
    )
  }
}

export default TodoItem