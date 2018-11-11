import React from 'react';
import CalculatorForm from './CalculatorForm';
import CalculatorResults from './CalculatorResults';
import "./CSS/Calculator.css";

class Calculator extends React.Component {
	state = {
		betType: "normal",
        backStake: "",
        backOdds: "",
        layOdds: "",
        layCommision: "2"
	};

	handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
    	return (
        <section className="Calculator">
            <CalculatorForm {...this.state} onInputChange={this.handleInputChange}/>
            <CalculatorResults {...this.state} />
        </section>
    	)
    }
}

export default Calculator;