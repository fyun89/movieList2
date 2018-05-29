class App extends React.Component{

	constructor() {
		super();
		this.state = {
			movies: movies,
			filtered: null
		};
	}

	componentDidMount() {
		var movies = this.state.movies;
		var counter = 0;
		var counterTarget = this.state.movies.length;
		var setState = this.setState.bind(this);
		var movieList = [];
		var cb = function () {
			setState({movies:movieList, filtered: null});
		};
		movies.forEach(function(elem){
			$.ajax({
				url: 'https://api.themoviedb.org/3/search/movie?api_key={0bdb361e966d04d4fcadbf09dbf49bb8}&query=' + elem.title,
				method: 'GET',
				data: {
					api_key: '0bdb361e966d04d4fcadbf09dbf49bb8'
				},
				success: function(data){
					//console.log(data)
					var id = data.results[0].id
					//console.log('id is ', id)
					$.ajax({
						url: 'https://api.themoviedb.org/3/movie/' + id,
						method: 'GET',
						data: {
							api_key: '0bdb361e966d04d4fcadbf09dbf49bb8'
						},
						success: function(data){
							//console.log('data is :', data)
							var scheme = {
								title: null,
								toggle: null,
								year: null,
								runtime: null,
								voteAverage: null
							}
							scheme.title= data.title
							scheme.toggle = false
							scheme.year= data.release_date
							scheme.runtime= data.runtime
							scheme.voteAverage= data.vote_average
							movieList.push(scheme)
							counter++
							if(counter === counterTarget){
								cb()
							}
							//console.log('scheme looks like: ', scheme)
						},
						error: function(err) {
							console.log('error is: ', err.statusText)
						}
					}) 
					setState({movies: movieList})
					//console.log('data is :', data)
				},
				error: function(err){
					console.log('error is: ', err.statusText)
				}
			})
		})
		console.log('movieList', movieList)
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