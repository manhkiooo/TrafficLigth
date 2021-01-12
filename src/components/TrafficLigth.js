import React, { Component } from 'react';
import './TrafficLigth.css';
import classnames from 'classnames';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLigth extends Component{
    constructor(){
        super();
        this.state = {
            currentColor: RED,
            secons: 0
        } ;

        setInterval(() => {
            if((this.state.secons === 25 && (this.state.currentColor === RED || this.state.currentColor === GREEN)) || (this.state.secons === 5 && this.state.currentColor === ORANGE)){         
                this.setState({
                    currentColor: this.getNextColor(this.state.currentColor),
                    secons: 0
                });
            }else{
                let secons2 = this.state.secons +1;
                this.setState({
                    secons: (secons2)
                })
            }
            
        }, 1000);
    }

    getNextColor(color){
        switch(color){
            case RED:
                return ORANGE;
            case ORANGE:
                return GREEN;
            case GREEN:
                return RED;
            default:
                return RED;
        }
    }

    render(){
        const { currentColor } = this.state;
        const { secons } = this.state;
        console.log(currentColor);
        return <div className="TrafficLigth">
            <div className={classnames('bulb', 'red', {
                active: currentColor === RED
            })} />
            <div className={classnames('bulb', 'orange', {
                active: currentColor === ORANGE
            })} />
            <div className={classnames('bulb', 'green', {
                active: currentColor === GREEN
            })} />
            <div className="number"><h2>{secons}</h2></div>
        </div> 
    }
}

export default TrafficLigth;