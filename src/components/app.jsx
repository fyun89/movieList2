class App extends React.Component{

	constructor() {
		super();
		this.state = {
			movies: movies,
			filtered: null
		};
	}

	handleFilterWatched(e) {
		var current = this.state.movies
		var watched = []
		current.forEach(function(elem){
			if (elem.toggle){
				watched.push(elem)
			}
		})
		this.setState({filtered: watched}, ()=>{console.log('filtered', this.state)})
	}

	handleToggle(e) {
		var current = this.state.movies
		console.log('e is: ', e)
		current.forEach(function(elem){
			if (elem.title === e){
				if (elem.toggle){
					elem.toggle = false
				}else{
					elem.toggle = true
				}
			}
		})
		// if (current[e].toggle) {
		// 	current[e].toggle = false
		// } else {
		// 	current[e].toggle = true
		// }
		this.setState({movies: current})
	}

	handleAddToList(addition) {
		var current = this.state.movies
		console.log(addition)
		this.setState({movies: current.concat([{title:addition, toggle:false}])})
	}

	handleFound (result) {
		if (this.state.filtered) {
			this.setState({filtered: result})
		}else{
			this.setState({movies: result})
		}
	}

	render() {
		return (
			<div>
				<AddToList movies={this.state.movies} addition={this.handleAddToList.bind(this)} />
				<Search movies={this.state.filtered||this.state.movies} found={this.handleFound.bind(this)} />
				<WatchToggle toggleWatched={this.handleFilterWatched.bind(this)} />
				<VideoList movies={this.state} toggled={this.handleToggle.bind(this)}/>
			</div>
		)
	}
}

window.App = App