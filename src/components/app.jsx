class App extends React.Component{

	constructor() {
		super();
		this.state = {
			movies: movies,
			filtered: null
		};
	}

	handleFound (result) {
		this.setState({movies: result})
	}

	render() {
		return (
			<div>
				<AddToList />
				<Search movies={this.state.movies} filtered={this.state.filtered} found={this.handleFound.bind(this)} />
				<VideoList movies={this.state.movies}/>
			</div>
		)
	}
}

window.App = App