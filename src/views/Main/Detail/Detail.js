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

	componentDidMount(prevProps) {
		if (this.props.map &&
			(prevProps.map !== this.props.map || 
			prevProps.params.placeId !== this.params.placeId)) {
				this.getDetails(this.props.map);
		}
	}

	getDetails(map) {
		const {google, params} = this.props;
		const {placeId} = params;

		this.setState({loading: true}, () => {
			getDetails(google, map, placeId)
			.then(place => {
				const {location} = place.geometry;
				const loc = {
					lat: location.lat(),
					lng: location.lng()
				}

				this.setState({
					place, location: loc, loading: false
				});
			})
		});
	}

	render() {
		if (this.state.loading) {
			return (<div className={styles.wrapper}>
							Loading...
							</div>)
		}
		const {place} = this.state;
		return (
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h2>{place.name}</h2>
				</div>
			</div>
		)
	}
}

export default Detail;