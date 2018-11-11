import React from "react";
import PropTypes from "prop-types";

function SmallControls(props) {
	return (
		<div className="Acca-Small-Controls">
            <label htmlFor="Back-Stake">Back Stake</label>
            <input id="Back-Stake"
                className="Acca-Small-Control"
                name="backStake"
                value={props.backStake}
                onChange={props.handleInputChange}
            />
            <label htmlFor="Back-Odds">Total Back Odds</label>
            <input id="Back-Odds"
                className="Acca-Small-Control"
                name="totalBackOdds"
                value={props.totalBackOdds}
                onChange={props.handleInputChange}
            />
        </div>
	)
}

SmallControls.propTypes = {
    backStake: PropTypes.string,
    totalBackOdds: PropTypes.string,
    handleInputChange: PropTypes.func
}

export default SmallControls;