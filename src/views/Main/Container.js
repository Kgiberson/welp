import React from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react';

import { searchNearby } from 'utils/googleApiHelpers';

export class Container extends React.Component {
	onReady(mapProps, map) {
		// when map is ready and 
		const { google } = this.props;
		const opts = {
			location: map.center,
			radius: '500',
			types: ['cafe']
		}
		searchNearby(google, map, opts)
			.then((results, pagination) => {
				// we got some results and a pagination object
			}).catch((status, result) => {
				// there was an error
			})
	}
	render() {
		return (
			<div>
				<Map 
					onReady={this.onReady.bind(this)}
					google={this.props.google} />
			</div>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: __GAPI_KEY__
})(Container);