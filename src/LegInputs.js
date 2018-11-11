import React from "react";
import PropTypes from "prop-types";

function LegInputs(props) {
    return (
        <div name={props.name} className="Acca-Leg">
            <input className="Leg-Date" type="date" name="date"
                placeholder="Date" />
            <input className="Leg-Match" type="text" name="match"
                placeholder="Match Teams" />
            <input className="Leg-Back-Odds"
                type="text" value={props.backOdds}
                name="backOdds" onChange={props.handleChange}
                placeholder="Back Odds" />
            <input className="Leg-Lay-Odds"
                type="text" value={props.layOdds}
                name="layOdds" onChange={props.handleChange}
                placeholder="Lay Odds" />
            <input className="Leg-Commision"
                type="text" value={props.commision}
                name="commision" onChange={props.handleChange}
                placeholder="Commision" />
            <input className="Leg-Lay-Stake"
                type="text" value={props.layStake}
                name="layStake" onChange={props.handleChange}
                placeholder="Lay Stake" />
            {props.name !== "leg1" && 
                <button className="Acca-Button Leg-Remove-Button"
                    onClick={props.removeLeg}>Remove leg</button>}
        </div>
    );
}

LegInputs.propTypes = {
    name: PropTypes.string,
    backOdds: PropTypes.string,
    layOdds: PropTypes.string,
    commision: PropTypes.string,
    layStake: PropTypes.string,
    handleChange: PropTypes.func,
    removeLeg: PropTypes.func
}

export default LegInputs;