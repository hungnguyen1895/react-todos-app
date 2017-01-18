import React from 'react';

export default class TodosListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false
		}
	}

	/*
	renderTaskSection() {
		const taskStyle = {
			textDecoration: this.props.isCompleted ? 'line-through' : 'none',
			cursor: 'pointer'
		}
		return (
			<td style={taskStyle} onClick={this.check.bind(this)}>{this.props.task}</td>
		)
	}
	*/
	renderActionsSection() {
		const taskStyle = {
			textDecoration: this.props.isCompleted ? 'line-through' : 'none',
			cursor: 'pointer'
		}
		if(this.state.isEditing) {
			return (
				<td>
					<form onSubmit={this.onSaveClick.bind(this)}>
						<input type="text" defaultValue={this.props.task} ref="editTask" />
						<button onClick={this.onSaveClick.bind(this)}>Save</button>
						<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
					</form>
					
				</td>
			)
		}
		return (			
			<td>
				<span style={taskStyle} onClick={this.check.bind(this)}>{this.props.task}</span>
				<button onClick={this.onEditClick.bind(this)}>Edit</button>
				<button onClick={this.onDeleteClick.bind(this)}>Delete</button>
			</td>		
		)
	}

	onSaveClick(e) {
		e.preventDefault();
		this.props.saveHandle(this.refs.editTask.value, this.props.index);
		this.setState({ isEditing: false});
	}

	check() {
		this.props.checkHandle(this.props.index);
	}

	onDeleteClick() {
		this.props.deleteHandle(this.props.index);
	}

	onEditClick() {
		this.setState({ isEditing: true });
	}

	onCancelClick() {
		this.setState({ isEditing: false });
	}

	render() {
		return (
				<tr>
					
					{this.renderActionsSection()}
					
				</tr>
		);
	}
}