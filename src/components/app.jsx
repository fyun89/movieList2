class App extends React.Component{

	constructor() {
		super();
		this.state = {movies: movies};
	}

	handleFound (result) {
		this.setState({movies: result})
	}

	render() {
		return (
			<div>
				<addToList />
				<Search movies={this.state.movies} found={this.handleFound.bind(this)} />
				<VideoList movies={this.state.movies}/>
			</div>
		)
	}
}

window.App = App