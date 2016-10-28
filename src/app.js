import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.css';
import './app.css';
import styles from './styles.module.css';

const App = React.createClass({
	render: function() {
		return (
			<div className={styles.wrapper}>
				This is my app!
				<h1>
				<i className="fa fa-start"></i>
				Environment: {__NODE_ENV__}</h1>
			</div>
		)
	}
})

ReactDOM.render(<App />, document.querySelector('#root'));
