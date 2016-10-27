import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
	render: function() {
		return (
			<div>
				This is my app!
			</div>
		)
	}
})

ReactDOM.render(<App />, document.querySelector('#root'));
