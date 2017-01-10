//ES6 method

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

//converting C > F, F > C
function toCelcius(fahrenheit) {
	return (fahrenheit - 32) * 5 /9;
}

function toFahrenheit(celcius) {
	return (celcius * 9 / 5) + 32;
}

function tryConvert(value, convert) {
	const input = parseFloat(value);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}


const scaleNames = {
	c: 'Celcius',
	f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onChange(e.target.value);
	}

	render() {
		const value = this.state.value;
		const scale = this.props.scale;
		return (
			<div>
				<label>Enter temperature in {scaleNames[scale]}:</label>
				<input value={value} onChange={this.handleChange} />
			</div>
		);
	}
}

class Calculator extends React.Component {
	render() {
		return (
			<div>
				<TemperatureInput scale="c" />
				<TemperatureInput scale="f" />
			</div>
		);
	}
}

ReactDOM.render(
	<Calculator />,
	document.getElementById('boiling')
)