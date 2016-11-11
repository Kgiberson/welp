import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.css';
import './app.css';

import { browserHistory, Router, Route } from 'react-router';

import App from 'containers/App/App';


const Home = React.createClass({
	render: function() {
		return (<div>Hello world</div>)
	}
})

const routes = (
	<Router>
		<Route path="/" component={Home} />
	</Router>
)


const mountNode = document.querySelector('#root');

ReactDOM.render(
	<App history={browserHistory} routes={routes} />, mountNode
	);

