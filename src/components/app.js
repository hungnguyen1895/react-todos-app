import React from 'react';
import TodosList from './todos-list';
import CreateListTodo from './create-todo'

const todos = [
{
	task: 'make React tutorial',
	isCompleted: false
},
{
	task: 'eat dinner',
	isCompleted: true
}
];

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: todos
		};
	}
	createTask(task) {
		
		/*
		this.state.todos.push({
			task: task,
			isCompleted: isCompleted===false
		});
		*/
		//using es6 short syxtax
		this.state.todos.push({
			task,
			isCompleted: false
		});
		this.setState({ todos: this.state.todos});
		
	}

	delete(index) {
		console.log(index);
		var newTodos = this.state.todos;
		newTodos.splice(index,1);
		this.setState({ todos: newTodos});
	}

	check(index) {
		todos[index].isCompleted = !todos[index].isCompleted;
		this.setState({ todos});
	}

	save(newTask, index) {
		todos[index].task = newTask;
		this.setState({todos});
	}

	render() {
		return (
			<div>
				<h1>React ToDos App</h1>
				<CreateListTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
				<TodosList save={this.save.bind(this)} check={this.check.bind(this)} delete={this.delete.bind(this)} todos={this.state.todos} />
			</div>
		);
	}
}