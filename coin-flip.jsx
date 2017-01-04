const image1 = 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg'
const image2 = 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'

var Application = React.createClass({
	// getInitialState is a special React function
	getInitialState: function() {
		return {
			image: 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg'
		}
	},
	flipCoin: function() {
	//"this" is the class/object we're in
	var checkState = this.state.image;
	var randNum = Math.round(Math.random());
	if (randNum == 0) {
		checkState = image1
	}
	else {
		checkState = image2
	}
		this.setState ({
			image: checkState

		})
	},
	render: function() {
		return (
			<div className="application">
				<button onClick={this.flipCoin}>Click to Flip</button>
				<div><img src={this.state.image} /></div>
			</div>
		)
	}
})

// React takes two parameters:
// 1) Component that I want to create.
// 2) Where in the DOM I want to place it (React makes a virtual DOM)
ReactDOM.render (
	<Application />,
	document.getElementById('container')
)
