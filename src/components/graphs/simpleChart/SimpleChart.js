import React, { Component } from 'react';

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
            <div>
                <div>1700</div>
                <div>Unique candidates</div>
                <div>Datetime</div>
            </div>
        );
    }
}

export default SimpleChart;