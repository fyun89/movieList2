class App extends React.Component{

	constructor() {
		super();
		this.state = {
			movies: movies,
			filtered: null
		};
	}

	handleToWatch() { //known bug: no indication for watched/to watch exists
		var current = this.state.movies
		var toWatch = []
		current.forEach(function(elem){
			if(!elem.toggle){
				toWatch.push(elem)
			}
		})
		this.setState({filtered:toWatch})
	}

	handleRefresh() {
		this.setState({filtered: null})
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
		this.setState({movies: current})
	}

	handleAddToList(addition) { //known bug: duplicate movies can be added
		var current = this.state.movies
		console.log(addition)
		this.setState({movies: current.concat([{title:addition, toggle:false}])})
	}

	handleFound (result) { //known bug: when searched movie, Show All doesn't work
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
				<WatchToggle toggleToWatch={this.handleToWatch.bind(this)} toggleWatched={this.handleFilterWatched.bind(this)} toggleRefresh={this.handleRefresh.bind(this)} />
				<VideoList movies={this.state} toggled={this.handleToggle.bind(this)}/>
			</div>
		)
	}
}

window.App = App