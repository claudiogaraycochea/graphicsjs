import React, { Component } from 'react';

class WidgetHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          //timespan: this.props.widget.timespan
        };
        //this.handleOnMenu = this.handleOnMenu.bind(this);
        /*this.removeWidget = this.removeWidget.bind(this);*/
    }
   /* handleOnMenu() {
        console.log('teesssssting');
    }*/
    render() {
        return (
            <div>
                {this.props.titleHeader}
                <button onClick={this.props.handleOnMenu}>Menu1</button>
            </div>
        );
    }
}

export default WidgetHeader;