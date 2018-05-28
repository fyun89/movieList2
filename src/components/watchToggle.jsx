class WatchToggle extends React.Component{ //upper level is App
	constructor(props){
		super(props)
		this.state = {button: false}
	}

	render(){
		return(
			<div id="watchToggle">
					<button id="toWatch" onClick={this.props.toggleToWatch} >To Watch</button>
					<button id="watched" onClick={this.props.toggleWatched} >Watched</button>
					<button id="refresh" onClick={this.props.toggleRefresh} >Show All</button>
			</div>
		)
	}
}


window.WatchToggle = WatchToggle