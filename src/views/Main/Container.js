import React from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react';

import { searchNearby } from 'utils/googleApiHelpers';

import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';

import styles from './styles.module.css';



export class Container extends React.Component {
	constructor(props, context) {
		// super initializes this
		super(props, context);

		this.state = {
			places: [],
			pagination: null
		}
	}

	onReady(mapProps, map) {
		// when map is ready 
		// const { google } = this.props.google;
		// const opts = {
		// 	location: map.center,
		// 	radius: '500',
		// 	types: ['cafe']
		// }
		searchNearby(this.props.google, map, {
			location: map.center,
			radius: '500',
			types: ['cafe']
		})
			.then((results, pagination) => {
				// we got some results and a pagination object
				this.setState({
					places: results,
					pagination
				})
			}).catch((status) => {
				console.log('error fetching nearby', status)
			})
	}

	render() {
		let children = null;
		if (this.props.children) {
			children = React.cloneElement(this.props.children, {
				google: this.props.google,
				places: this.state.places,
				loaded: this.props.loaded,
				router: this.context.router,
				onMove: this.onMapMove.bind(this),
				zoom: this.props.zoom
			})
		}

		return (
      <div>
				<Map 
					google={this.props.google} 
					onReady={this.onReady.bind(this)}
					visible={false} 
					className={styles.wrapper}>

					<Header />

					<Sidebar 
						title={'Restaurants'}
						places={this.state.places}
					/>

					<div className={styles.content}>
						{children}
					</div>
				</Map>
      </div>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: __GAPI_KEY__
})(Container);