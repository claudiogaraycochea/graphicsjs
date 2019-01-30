import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import './SimpleChart.css';

class SimpleChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userWidgets: [],
          data: [] 
        };
    }

    render() {
        return (
            <Grid.Column>
                <Segment className={`simple-chart ${this.props.color}`}>
                    <div className="title">{this.props.title}</div>
                    <div className="description">{this.props.description}</div>
                    <div className="datetime">{this.props.datetime}</div>
                </Segment>                
            </Grid.Column>
        );
    }
}

export default SimpleChart;