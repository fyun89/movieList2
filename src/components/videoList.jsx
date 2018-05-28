var VideoList = (props) => {

	return (
		<table id="movieListTable">
			<tbody>
				{props.movies.map(function(elem, i){
					return (
						<VideoListEntry title={elem.title} key={i}/>
					)
				})}
			</tbody>
		</table>
	)
}

window.VideoList = VideoList