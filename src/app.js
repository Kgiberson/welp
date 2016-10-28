import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import styles from './styles.module.css';

const App = React.createClass({
	render: function() {
		return (
			<div className={styles.wrapper}>
				This is my app!
				<h1>Environment: {__NODE_ENV__}</h1>
			</div>
		)
	}
})

ReactDOM.render(<App />, document.querySelector('#root'));
