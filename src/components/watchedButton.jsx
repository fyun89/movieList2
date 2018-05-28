var WatchedButton = (props) => { //upper level is VideoListEntry
	return ( 
		<button id="watchedButton" onClick={props.toggled}>Watched</button>
	)
}
window.WatchedButton = WatchedButton