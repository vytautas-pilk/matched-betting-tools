import React from "react";
import LegInputs from "./LegInputs";
import SmallControls from "./SmallControls";
import "./CSS/Acca.css";

class Acca extends React.Component {
    
    state = {
        backStake: "",
        totalBackOdds: "0.00",
        acca: [
            {
                name: "leg1",
                backOdds: "",
                layOdds: "",
                commision: "",
                layStake: ""
            }
        ],
        legCount: 1,
        isMobile: true
    };

    componentDidMount() {
        this.checkScreenWidth();
        window.addEventListener("resize", this.checkScreenWidth);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.checkScreenWidth);
    }

    checkScreenWidth = () => {
        this.setState({ // check if the screen width has changed and setState
            isMobile: window.innerWidth > 899 ? false : true 
        });
    }
    
    updateAcca = () => {
        // update two things here: total back odds and required lay stakes

        // variables
        const acca = this.state.acca;
        const totalBackOdds = acca.reduce((total, leg) => {
            return Number(((leg.backOdds || 1) * total).toFixed(3));
            }, 1);
        const lastLegLay = Number(((this.state.backStake * totalBackOdds) /
            (acca[acca.length - 1].layOdds -
            (acca[acca.length - 1].commision / 100))).toFixed(2));
        
        // this method returns a list of required lay stakes
        const newAcca = acca.reduceRight(
            (newAcca, leg, ind, array) => {
                let prevLeg = array[ind + 1];
                let prevStake = newAcca[array.length - ind - 2];
                if (leg === array[array.length - 1]) {
                    return newAcca.concat(lastLegLay)
                } else {
                    return newAcca.concat(
                        Math.floor(prevStake * (1 - (prevLeg.commision / 100)) /
                        (leg.layOdds - (leg.commision / 100)) * 100) / 100
                    )
                }
            }, []
        ).reverse();

        this.setState({
            totalBackOdds: totalBackOdds,
            acca: [...this.state.acca].map((leg, index) => {
                return Object.assign(leg, {layStake: newAcca[index]})
            })
        })
    }

    handleInputChange = (event) => {
        const legName = event.currentTarget.parentNode.getAttribute("name");
        const legInput = event.currentTarget.getAttribute("name");
        const value = event.currentTarget.value;
        // conditional statement needed to check if the current event target
        // has its' state on the first level or deeper in the state object
        if (legInput === "backStake") { // first level
            this.setState({
                [legInput]: value
            }, this.updateAcca);
        } else {
            this.setState(prevState => ({ // second level
                acca: prevState.acca.map(
                leg => {
                    if (leg.name === legName) {
                        return Object.assign(leg, { [legInput]: value })
                    } else {
                        return leg
                    }
                }),
            }), this.updateAcca); // update needed here to calculate correct values
        }
    }

    handleAddLeg = () => { // 
        const legCount = this.state.legCount;
        const name = `leg${legCount + 1}`;
        const leg = {
            name,
            backOdds: "",
            layOdds: "",
            commision: "",
            layStake: ""
        };
        this.setState(prevState => ({
            acca: prevState.acca.concat({...leg}),
            legCount: prevState.legCount + 1
            })
        );
    }
    
    handleRemoveLeg = (event) => {
        // after removing a leg from the array recalculation is done
        // to collect correct values for every single leg
        const legName = event.currentTarget.parentNode.getAttribute("name");
        const legIndex = this.state.acca.findIndex(leg => 
            leg.name === legName);
        this.setState(prevState => ({
            acca: [
                ...prevState.acca.slice(0, legIndex),
                ...prevState.acca.slice(legIndex + 1)
            ]
        }), this.updateAcca);
    }

    render() {
        const legsList = this.state.acca
            .map(leg =>
                <LegInputs
                    key={leg.name}
                    name={leg.name}
                    backOdds={leg.backOdds}
                    layOdds={leg.layOdds}
                    commision={leg.commision}
                    layStake={leg.layStake}
                    handleChange={this.handleInputChange}
                    removeLeg={this.handleRemoveLeg}
                />
        );
        
        // this is for wide screens only
        const inputs = ["Date", "Match", "Back Odds", "Lay Odds", "Comm.%",
            "Lay Stake"];

        const inputsList = inputs.map(input => (
                <div key={input} style={{display: "inline"}}
                    className={input}>{input}</div>
            ));

        return (
            <div className="Acca-Calculator">
                {this.state.isMobile === false &&
                    <div className="Acca-Leg">{inputsList}</div>}
                {legsList}
                <button
                    className="Acca-Button"
                    onClick={this.handleAddLeg}>Add leg</button>
                <SmallControls
                    backStake={this.state.backStake}
                    totalBackOdds={this.state.totalBackOdds}
                    handleInputChange={this.handleInputChange}
                />
            </div>
        );
    }
}

export default Acca;
