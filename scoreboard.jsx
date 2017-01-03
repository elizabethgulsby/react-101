// State. V1.
// Props are immutable (they do not change!).
// State is a piece of data that *does* change.
// State also has an initial value that changes when X happens
// In the case of the National Championship, it starts at 0...this is the initial state.
// Some kind of mutation or change occurs.
// In order to use state, we have to make our functions, React classes.


var teams = [
	{
		name: "Alabama",
		score: 0,
		mascot: "Crimson Tide"
	},
	{
		name: "Clemson",
		score: 0,
		mascot: "Tigers"	
	}
	// {
	// 	name: "USC",
	// 	score: 0,
	// 	mascot: "Trojans"	
	// }

];

function Header(props) {
	return (
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	)
}

function Team(props) {
	return (
		<div className="team">
			<div className="team-name">{props.name}</div>
			{ /* Remove Counter.  Make it a component. */}
			<Counter score={props.score} />
		</div>
	)
}

{ /* React.createClass is a React component class that takes an object.  The only REQUIRED property is a render method */ }
{ /* EVERY TIME state changes, render gets called */ }
var Counter = React.createClass({
	/* We also need to add a getInitialState property that is part of React. This function sets the initial state of a variable.  It usually returns a single object. */
	getInitialState: function() {
		return {score: 0}
	},

	losePoint: function() {
		console.log("You clicked on the down button!")
		// setState is a special React function that updates the state.
		this.setState({
			score: (this.state.score - 1)
		})
	},

	gainPoint: function() {
		this.setState({
			score: (this.state.score + 1)
		})
	},

	render: function() {
		{ /* back to where we are used to!! */ }
		return (
			<div class="counter">
				<button onClick={this.losePoint} className="counter-change minus">-</button>

				{ /* Change the score from this.props.score to state! */ }
				<div className="team-score"> {this.state.score} </div>
				<button onClick={this.gainPoint} className="counter-change plus">+</button>
			</div>
		)
	}
});

function Application(props) {
	return (
		<div className="scoreboard">
			<Header title={props.title} />
			<div className="teams">

				{ /* Using Map to loop through our teams JSON.  The below (2) Team name calls are no longer necessary. */ }
				{ /* <Team name="Alabama" score="0" /> */ }
				{ /* <Team name="Clemson" score="0" /> */ }

				{ /* props.teams is an array of team objects */ }
				{ /* return a component with the current team name and score */ }
				{ /* () => {} is ES6 way of saying function(something) {} */ }

				{ /* Map has replaced the for loop - index is a counter */ }
				{props.teams.map((team, index) => {
					return <Team key={index} name={team.name} score={team.score} />
				})}

			</div>
		</div>
	)
}

ReactDOM.render (
	<Application title="National Championship Scoreboard" teams={teams} />,
	document.getElementById('container')
)