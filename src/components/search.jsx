class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault()
		console.log(this.props)
		var toSearch = this.state.value.toLowerCase()
		var found = this.props.found
		var foundList = []
		this.props.movies.forEach(function(movies) {
			if (movies.title.toLowerCase().includes(toSearch)){
				console.log('found it', movies)
				foundList.push(movies)
			}
		})
		if (foundList.length < 1){
			foundList = [{title: 'None found'}]
		}
		found(foundList)//can pass down the search term via this.
	}

	handleChange(e) {
		var value = e.target.value
		this.setState({value: value}, () => console.log(this.state))
	}


  render() {
		return (
			<form id="search" onSubmit={this.handleSubmit.bind(this)} >
				<label>
					Search Your Movies:
					<input type="text" placeholder="Search" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit"  />
			</form>
		)
	}
}

window.Search = Search