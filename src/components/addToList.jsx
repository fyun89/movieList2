class AddToList extends React.Component{
	constructor(props) {
		super(props);
		this.state = {value: ''};
	}

	handleChange(e) {
		var value = e.target.value
		this.setState({value: value}, function(){console.log(this.state)})
	}

	handleSubmit(e) {
		e.preventDefault()
		console.log('handleSubmit working')
		this.props.addition(this.state.value)
	}

	render() {
		return (
			<form id="addInput" onSubmit={this.handleSubmit.bind(this)} >
				<label>
					Add New Movie:
					<input type="text" placeholder="Add a movie" onChange={this.handleChange.bind(this)} />
				</label>
					<input type="submit" value="Add" />
			</form>
		)
	}
}

window.AddToList.AddToList