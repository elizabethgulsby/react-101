function calculate() {
	
}

function Year(props) {
	return (
		<p>{props.age}</p>
	)
}

var Calculator = React.createClass({
	getInitialState: function() {
		return {
			value: 0
		}
	},

	handleChange: function(event) {
		this.setState({
			value: (2016 - event.target.value)
		})
	},

	render: function() {
		var age = calculate();
		return (
			<div>
				<form>
					<input type="text" placeholder="birth year" onChange={this.handleChange} />
					<input type="submit" value="Click Me!" onChange={this.handleChange} />
					<Year age={this.state.value} />
				</form>
			</div>
		)
	}
})

ReactDOM.render (
	<Calculator />,
	document.getElementById('age-calc')
)