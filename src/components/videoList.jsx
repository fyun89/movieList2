var VideoList = (props) => { //upper level is App

  var movies = props.movies.filtered || props.movies.movies;
	//console.log('movies filtered: ', props.filtered)
	//console.log('movies: ', props)
	return (
		<table id="movieListTable">
			<tbody>
				{movies.map(function(elem, i) {
					return (
						<VideoListEntry title={elem.title} key={i} toggled={()=>props.toggled(elem.title)} />
					)
				})}
			</tbody>
		</table>
	)
}

window.VideoList = VideoList