import React from "react";
import Calculator from "./Calculator";
import Acca from "./Acca";
import { Switch, Link, Route } from "react-router-dom";
import "./CSS/Tools.css";

function Tools({ match }) {
	return (
		<div className="Tools">
			<h1 className="Section-Header">Choose your calculator</h1>
			<ul className="Tools-List">
				<li className="Tools-List-Item">
					<Link to={`${match.url}/regular`}>Regular Calculator</Link>
				</li>
				<li className="Tools-List-Item">
					<Link to={`${match.url}/acca`}>Accumulator Calculator</Link>
				</li>
			</ul>
			<Switch>
				<Route path={`${match.path}/regular`} component={Calculator} />
				<Route path={`${match.path}/acca`} component={Acca} />
			</Switch>
		</div>
	);
}

export default Tools;