var WatchToggle = (props) => { //upper level is App
	return(
		<div id="watchToggle">
				<button id="toWatch">To Watch</button> <button id="watched" onClick={props.toggleWatched} >Watched</button>
		</div>
	)
}

window.WatchToggle = WatchToggle