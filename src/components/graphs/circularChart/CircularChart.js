import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import './CircularChart.css';

class CircularChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userWidgets: [],
          data: [] 
        };
    }
    
    getColorPercentage() {
        if(this.props.percentage>=75){
            return '#7ac40f'; // Green
        }  
        if(this.props.percentage>=50) {
            return '#ffdf98'; // Yellow
        }
        if(this.props.percentage<50) {
            return '#f05150'; // Red
        }
    }

    render() {
        const colorLine = this.getColorPercentage();
        const borderSize = (this.props.size===undefined) ? 8 : 2;
        const fontSize = (this.props.size===undefined) ? 30 : 22;
 
        console.log('*********',this.props.borderSize);
        return (
            <CircularProgressbar
                percentage={this.props.percentage}
                text={`${this.props.percentage}%`}
                // Path width must be customized with strokeWidth,
                // since it informs dimension calculations.
                strokeWidth={borderSize}
                // You can override styles either by specifying this "styles" prop,
                // or by overriding the default CSS here:
                // https://github.com/iqnivek/react-circular-progressbar/blob/master/src/styles.css
                styles={{
                    // Customize the root svg element
                    root: {},
                    // Customize the path, i.e. the part that's "complete"
                    path: {
                    // Tweak path color:
                    stroke: `${colorLine}`,
                    // Tweak path to use flat or rounded ends:
                    strokeLinecap: 'butt',
                    // Tweak transition animation:
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    },
                    // Customize the circle behind the path
                    trail: {
                    // Tweak the trail color:
                    stroke: '#e9e9e9',
                    },
                    // Customize the text
                    text: {
                    // Tweak text color:
                    fill: '#222',
                    // Tweak text size:
                    fontSize: `${fontSize}px`,
                    },
                }}
            />
        );
    }
}

export default CircularChart;