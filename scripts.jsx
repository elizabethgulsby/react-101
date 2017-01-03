// Babel will read this, turn it into something else, and it will go into browser in language(s) it will understand

function Application(props) {
	// capital letters in React, means component.
	// Components return a single virtual DOM element.
	return (
		<div className="application"> 
			<h1>{props.title}</h1>
			{props.message}
		</div>
	)
}

// telling ReactDOM we want the following put on the screen (update the DOM)
ReactDOM.render (
	// go find Application component, find something with ID of container, run the contents of Application along with message/title attributes
	<Application message="Hello, class" title="React Day!" />, 
	document.getElementById('container')
);