import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
	return (
		<div>
			<nav className="navbar navbar-light bg-light">
				<Link to="/catch/fish" className="navbar-brand">
					<img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
					BootStrap
				</Link>
			</nav>
		</div>
	);
}
				
export default Header;

