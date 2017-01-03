// This app sucks.  There is no point in using React.  Everything is hard-coded so far....
// Let's make some JSON!
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
	},
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
			<div className="counter">
				<button className="counter-change minus">-</button>
				<div className="team-score"> {props.score} </div>
				<button className="counter-change plus">+</button>
			</div>
		</div>
	)
}

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

				{ /* map function has replaced the for loop - index is a counter */ }
				{props.teams.map((team, index) => {
					return <Team key={index} name={team.name} score={team.score} />
				})}

			</div>
		</div>
	)
}

{ /*Add a title attribute to the application when it's rendered */ }
ReactDOM.render (
	<Application title="National Championship Scoreboard" teams={teams} />,
	document.getElementById('container')
)