import React from 'react';
import PropTypes from "prop-types";


function CalculatorForm(props) {
    return (
        <form className="Calculator-Form">
          <div className="Bet-Type-Field">
            <label htmlFor="Bet-Type">Select bet type:</label>
            <select 
                className="Select-Bet-Type" id="Bet-Type" name="betType"
                onChange={props.onInputChange} value={props.betType}>
              <option value="normal">Normal</option>
              <option value="free bet">Free Bet (SNR)</option>
            </select>
          </div>
          <div className="Calculator-Field Back-Bets-Field">
            <label className="Calculator-Labels" htmlFor="Back-Bet">
              Back stake:</label>
            <input 
                className="Calculator-Controls Back-Controls" 
                type="text" name="backStake" id="Back-Bet"
                onChange={props.onInputChange} value={props.backStake}
                placeholder="10.00" />
          </div>
          <div className="Calculator-Field Back-Bets-Field">
            <label className="Calculator-Labels" htmlFor="Back-Odds">
              Back odds:</label>
            <input 
                className="Calculator-Controls Back-Controls" 
                type="text" name="backOdds" id="Back-Odds"
                onChange={props.onInputChange} value={props.backOdds}
                placeholder="1.75" />
          </div>
          <div className="Calculator-Field Lay-Bets-Field">
            <label className="Calculator-Labels" htmlFor="Lay-Odds">
              Lay odds:</label>
            <input 
                className="Calculator-Controls Lay-Controls" 
                type="text" name="layOdds" id="Lay-Odds"
                onChange={props.onInputChange} value={props.layOdds}
                placeholder="1.7" />
          </div>
          <div className="Calculator-Field Lay-Bets-Field">
            <label className="Calculator-Labels" htmlFor="Lay-Commission">
              Exchange commision:</label>
            <input 
                className="Calculator-Controls Lay-Controls" 
                type="text" name="layCommision" id="Lay-Commission"
                onChange={props.onInputChange} value={props.layCommision} />
          </div>
        </form>
    )
}

CalculatorForm.propTypes = {
  onInputChange: PropTypes.func,
  betType: PropTypes.string,
  backStake: PropTypes.string,
  backOdds: PropTypes.string,
  layOdds: PropTypes.string,
  layCommision: PropTypes.string
}

export default CalculatorForm;