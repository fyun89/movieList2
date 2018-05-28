var VideoListEntry = (props) => {
	return (
		<tr key={props.i} >
			<td>{props.title}<WatchedButton /></td>
		</tr>
	)
}

window.VideoListEntry = VideoListEntry