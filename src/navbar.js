import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { allLinks } from './links';

export default function Navbar() {
	// console.log(allLinks[0][0].link);
	const home = allLinks[0][0].link;
	const somewhere = allLinks[0][1].link;
	const somewhere2 = allLinks[0][2].link;

	return (
		<Router>
			<div className="navbar">
				<Link path={home}>{home}</Link>
				<Link exact path={somewhere}>
					{somewhere}
				</Link>
				<Link path={somewhere2}>{somewhere2}</Link>
			</div>
		</Router>
	);
}
