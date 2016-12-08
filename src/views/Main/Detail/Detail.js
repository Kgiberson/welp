import React from 'react';
import {getDetails} from 'utils/googleApiHelpers';
import styles from './styles.module.css';

export class Detail extends React.Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
			loading: true,
			place: {},
			location: {}
		}
	}

	getDetails(map) {}

	render() {
		return (
			<div className={styles.details}></div>
		)
	}
}

export default Detail;