import React from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react';

export class Container extends React.Component {
	onReady(mapProps, map) {
		// when map is ready and mounted
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