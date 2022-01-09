import React from 'react';

class GoogleAuth extends React.Component {
	state ={ isSignedIn: null };
	
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: '364966615957-p6292526as88ggu8neb1sssh3jtb4f8r.apps.googleusercontent.com',
				scope: 'email'
			}).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				this.setState({isSignedIn: this.auth.isSignedIn.get() })
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
	}
	
	onAuthChange = () => {
		this.setState({isSignedIn: this.auth.isSignedIn.get() });
	}
	
	onSignIn = () => {
		this.auth.signIn();
	};
	
	onSignOut = () => {
		this.auth.signOut();
	};
	
	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return null;
		} else if (this.state.isSignedIn === true) {
			return (
				<button className="btn btn-primary" onClick={this.onSignOut}>
					Sign Out
				</button>
			);
		} else {
			return (
				<button className="btn btn-primary" onClick={this.onSignIn}>
					Sign In with Google
				</button>
			);
		}
	}
	
	render() {
		return (
			<div>{this.renderAuthButton()}</div>
		);
	}
}

export default GoogleAuth;