import React from 'react';
import _ from 'lodash';

export default class CreateListTodo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			error: null
		};
	}

	handleCreate(e) {
		e.preventDefault();
		const createInput = this.refs.createInput;
		const task = createInput.value;
		const validateInput = this.validateInput(task);
		if(validateInput) {
			this.setState({ error: validateInput});
			return;
		}
		this.props.createTask(task);
		this.refs.createInput.value = '';
	}
	validateInput(task) {
		console.log(typeof(task));
		//emptry string is false
		if(!task) {
			return 'Please enter a task';
		} else if (_.find(this.props.todos, todo => todo.task === task)) {
			return 'Task already exists';	
		} else  {return null}
	}
	renderError() {
		if(!this.state.error) { return null;}
		return <div style={{color: 'red'}}>{this.state.error}</div>;
	}
	render() {
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" placeholder="what do I need to do?" ref="createInput"/>
				<button>Create</button>
				{this.renderError()}
			</form>
		);
	}
}