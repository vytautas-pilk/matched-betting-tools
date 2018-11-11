import React from 'react';
import PropTypes from "prop-types";

function CalculatorResults(props) {
    const {betType, backStake, backOdds, layOdds, layCommision} = props;
    let layStake;
    
    // we need different values for different types of events stored in layStake
    if (betType === "normal") {
        layStake = Number(
            (backOdds / (layOdds - (layCommision / 100)) * backStake)
            .toFixed(2))
    } else {
        layStake = Number(
            ((backOdds - 1) / (layOdds - (layCommision / 100)) * backStake)
            .toFixed(2))
    }
  
    const profit = Number(
        ((backOdds - 1) * backStake - (layOdds - 1) * layStake).toFixed(2)
        );
    const liability= Number((layStake * (layOdds - 1)).toFixed(2));

    let style = {color: "#24B324"};
    
    if (profit === 0) 
        style = {color: "#444"}
    else if (profit < 0)
        style = {color: "#CC1414"}

    return (
        <div className="Results">
            <h1 className="Results-Header">Result</h1>
            <p>Required lay stake is £{0 || layStake}</p>  
            <p>Your liability will be £{0 || liability}</p>
            <p>
                {`Your profit${betType === "normal" ? "/loss is " : " is "}`} 
                <span style={style}>£{0 || profit}</span>
            </p>
        </div>
    )
}

CalculatorResults.propTypes = {
  betType: PropTypes.string,
  backStake: PropTypes.string,
  backOdds: PropTypes.string,
  layOdds: PropTypes.string,
  layCommision: PropTypes.string
}

export default CalculatorResults;