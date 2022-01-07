import React from 'react';

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: '364966615957-p6292526as88ggu8neb1sssh3jtb4f8r.apps.googleusercontent.com',
				scope: 'email'
			});
		});
	}
	
	render() {
		return (
			<div>Google Auth</div>
		);
	}
}

export default GoogleAuth;