import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

//{...todo} === task={todo.task} isCompleted={todo.isCompleted}

export default class TodosList extends React.Component {

	deleteHandle(index) {

		this.props.delete(index);

	}

	checkHandle(index) {
		this.props.check(index);

	}

	saveHandle(editTask, index) {
		this.props.save(editTask, index);
	}

	renderItems() {
		return _.map(this.props.todos, (todo, i) => <TodosListItem saveHandle={this.saveHandle.bind(this)} checkHandle={this.checkHandle.bind(this)} deleteHandle={this.deleteHandle.bind(this)} index={i} key={i} {...todo} />);
		
	}

	render() {
		return (
			<table>
				<TodosListHeader />	
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		);
	}
}