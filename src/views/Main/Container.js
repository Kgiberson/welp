import React from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react';

import { searchNearby } from 'utils/googleApiHelpers';

import Header from 'components/Header/Header';
import Sidebar from 'componenets/Sidebar/Sidebar';

import styles from './styles.module.css';



export class Container extends React.Component {
	constructor(props) {
		// super initializes this
		super(props);

		this.state = {
			places: [],
			pagination: null
		}
	}

	onReady(mapProps, map) {
		// when map is ready 
		const { google } = this.props;
		const opts = {
			location: map.center,
			radius: '500',
			types: ['cafe']
		}
		searchNearby(google, map, opts)
			.then((results, pagination) => {
				// we got some results and a pagination object
				this.setState({
					places: results,
					pagination
				})
			}).catch((status, result) => {
				// there was an error
			})
	}
	render() {
		return (
			<div>
				<Map 
					onReady={this.onReady.bind(this)}
					google={this.props.google} 
					visible={false} 
					className={styles.wrapper}>

					
					<Header />
					<Sidebar />
					<div className={styles.content}>
						{this.state.places.map(place => {
							return (<div key={place.id}>{place.name}</div>)
						})}
					</div>
				</Map>
			</div>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: __GAPI_KEY__
})(Container);