// Two utility functions to convert C > F, F > C
function toCelcius(f) {
	return (f - 32) * 5/9;
}

function toFahreheit(c) {
	return (c * 9/5) + 32;
}

// Make another utility function that tries the conversion.  
// If it can, it returns the conversion rounded; if it can't, it returns an empty string.
function tryConvert(value, tUnit) {
	var tryNumber = Number(value);
	if (isNaN(tryNumber)) {
		//this is NOT!!!! a valid number we can work with!
		return '';
	}
	else {
		//this is a valid number (isNaN returned false) we can convert!
		if (tUnit == 'c') {
			var convertedNumber = toFahreheit(tryNumber);
		}
		else {
			var convertedNumber = toCelcius(tryNumber);
		}
		return convertedNumber;
	}
}
// console.log('100 deg f is ',tryConvert(100, 'f'), 'celcius');
// console.log('100 deg c is ',tryConvert(0, 'c'), 'fahrenheit');


function BoilingVerdict(props) {
	if (props.celcius >= 100) {
		return (
			<p>The water would boil at {props.celcius} Celcius</p>
		)
	}
	else {
		return (
			<p>The water would NOT boil at {props.celcius} Celcius</p>
		)
	}
}


var TemperatureInput = React.createClass ({
	// getInitialState: function() {
	// 	return {
	// 		value: ''
	// 	}
	// },

	handleChange: function(event) {
		// this.setState ({
		// 	value: event.target.value
		// })
		this.props.onChange(event.target.value)
	},

	render: function() {
		var value = this.props.value;
		var tUnits = this.props.tUnits;
		return (
			<div>
				<label>Enter temperature in question in {tUnits}</label>
				<input placeholder="temp" value={value} onChange={this.handleChange} />
			</div>
		)
	}
});

{/*Parent function*/}
var Calculator = React.createClass({
	getInitialState: function() {
		return {
			value: 32,
			scale: 'c'
		}
	},

	handleCelciusChange: function(value) {
			this.setState({
				scale: 'c',
				value: value 
			})
	},

	handleFahrenheitChange: function(value) {
			this.setState({
				scale: 'f',
				value: value
			})
	},

	render: function() {
		var scale = this.state.scale;
		var value = this.state.value;
		if (this.state.scale == 'c') {
			var fTemp = tryConvert(value, 'c');
			var cTemp = value;
		}
		else if (this.state.scale =='f') {
			var fTemp = value;
			var cTemp = tryConvert(value, 'f')
		}

		return (
			<div>
				<TemperatureInput tUnits="Celcius" value={cTemp} onChange={this.handleCelciusChange} />
				<TemperatureInput tUnits="Fahrenheit" value={fTemp} onChange={this.handleFahrenheitChange} />
				<BoilingVerdict celcius={Number(cTemp)} />
			</div>
		)
	}
});


ReactDOM.render (
	<Calculator />,
	document.getElementById('boiling')
)