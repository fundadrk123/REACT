import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoFrom from './NewTodoFrom';
import './TodoList.css';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.create=this.create.bind(this)
    this.update=this.update.bind(this)
    this.togleCompletion=this.togleCompletion.bind(this)
  }
create(newTodo){
  this.setState({
    todos:[...this.state.todos,newTodo],
  })
}
remove(id){
  this.setState({
    todos: this.state.todos.filter((todo) => todo.id !==id),
  })
}
update(id, updateTask){
  const updateTodos=this.state.todos.map(todo=>{
    if(todo.id ===id){
      return{ ...todo, task: updateTask }
    }
    return todo
  })
  this.setState({todos: updateTodos})
}
togleCompletion(id){
  const updateTodos= this.state.todos.map(todo => {
    if(todo.id ===id){
    return{ ...todo, completed: !todo.completed}
    }
    return todo
  })
  this.setState({
    todos: updateTodos,
  })
}
  render() {
    const todos=this.state.todos.map(todo =>{
      return(
        <Todo key={todo.id} id={todo.id} completed={todo.completed} task={todo.task} removeTodo={() => this.remove(todo.id)} updateTodo={this.update} toggleTodo={this.togleCompletion}/>
      )
    })
    return (
      <div className='TodoList'>
        <h1>
          Yapılacaklar Listesi <span>React İle Todo List Uygulaması</span>
        </h1>
        <ul>{todos}</ul>
        <NewTodoFrom createTodo={this.create}/>
      </div>
    );
  }
}

export default TodoList;