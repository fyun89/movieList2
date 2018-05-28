var VideoListEntry = (props) => { //upper level is VideoList
	return (
		<tr key={props.i} >
			<td>{props.title}<WatchedButton toggled={props.toggled} /></td>
		</tr>
	)
}

window.VideoListEntry = VideoListEntry