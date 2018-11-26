import React from "react";
import PropTypes from "prop-types";

function SmallControls(props) {
    const profitStyle = props.profit >= 0 ? {color: "green"} : {color: "red"};
	return (
		<div className="Acca-Small-Controls">
            <label className="Acca-Small-Control-Label"
                htmlFor="Back-Stake">Back Stake</label>
            <input id="Back-Stake"
                className="Acca-Small-Control"
                name="backStake"
                value={props.backStake}
                onChange={props.handleInputChange}
            />
            <label className="Acca-Small-Control-Label"
                htmlFor="Back-Odds">Total Back Odds</label>
            <input id="Back-Odds"
                className="Acca-Small-Control"
                name="totalBackOdds"
                value={props.totalBackOdds}
            />
            <label className="Acca-Small-Control-Label"
                htmlFor="Profit">Profit</label>
            <input id="Profit"
                style={profitStyle}
                className="Acca-Small-Control"
                name="profit"
                value={props.backStake ? props.profit : ""}
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