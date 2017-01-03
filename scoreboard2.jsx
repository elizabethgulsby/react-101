{ /*Added prop parameter so render can send stuff to the component*/ }
function Application(props) {
	// Components return a virtual DOM element
	return (
		<div className="scoreboard">
			<div className="header">
		{ /*to get the title, we call the title property of the props object */ }
				<h1>{props.title}</h1>
			</div>
			<div className="teams">
				<div className="team">
					<div className="team-name">Alabama</div>
					<div className="counter">
						<button className="counter-change minus">-</button>
						<div className="team-score"> 0 </div>
						<button className="counter-change plus">+</button>
					</div>
				</div>

				<div className="team">
					<div className="team-name">Clemson</div>
					<div className="counter">
						<button className="counter-change minus">-</button>
						<div className="team-score"> 0 </div>
						<button className="counter-change plus">+</button>
					</div>
				</div>
				
			</div>
		</div>
	)
}

{ /*Add a title attribute to the application when it's rendered */ }
ReactDOM.render (
	<Application title="National Championship Scoreboard" />,
	document.getElementById('container')
)