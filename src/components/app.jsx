class App extends React.Component{

	constructor() {
		super();
		this.state = {
			movies: movies
		};
	}

	handleAddToList(addition) {
		var current = this.state.movies
		console.log(addition)
		this.setState({movies: current.concat([{title:addition}])})
	}

	handleFound (result) {
		this.setState({movies: result})
	}

	render() {
		return (
			<div>
				<AddToList movies={this.state.movies} addition={this.handleAddToList.bind(this)} />
				<Search movies={this.state.movies} found={this.handleFound.bind(this)} />
				<WatchToggle />
				<VideoList movies={this.state.movies} />
			</div>
		)
	}
}

window.App = App