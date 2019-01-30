import React, { Component } from 'react';
import CircularChart from '../graphs/circularChart/CircularChart';
import { Grid, Segment } from 'semantic-ui-react';
import './WidgetSessionsByDevices.css';
import WidgetHeader from './WidgetHeader';

class WidgetSessionsByDevices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //timespan: this.props.widget.timespan
    };
    this.handleOnMenu = this.handleOnMenu.bind(this);
    /*his.removeWidget = this.removeWidget.bind(this);*/
  }

  handleOnMenu(e) {
    
    /*this.props.updateWidget(Object.assign(this.props.widget, {timespan: data.value}))
    this.setState({
      timespan: data.value
    });
    this.doCall();*/
    console.log('onclick weoeoriewreoiwoiriowe');
  }

  render() {
    const titleHeader = 'Sessions by Devices';
    return (
        <Grid stackable columns={1} className="wrapper-sessions-by-devices">
          <Grid.Column>
            <Segment>
              <WidgetHeader titleHeader={titleHeader} {...this.props}/>
              <Grid stackable stretched columns={4}>
                <Grid.Column>
                  <div className="wrapper-item">
                    <div className="title">Desktop PC</div>
                    <div className="image">
                      <CircularChart percentage={55} size={`small`}/>
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="wrapper-item">
                    <div className="title">Macbook</div>
                    <div className="image">
                      <CircularChart percentage={26} size={`small`}/>
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="wrapper-item">
                    <div className="title">Smartphone</div>
                    <div className="image">
                      <CircularChart percentage={9} size={`small`}/>
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="wrapper-item">
                    <div className="title">Tablet</div>
                    <div className="image">
                      <CircularChart percentage={10} size={`small`}/>
                    </div>
                  </div>
                </Grid.Column>
              </Grid>                     
              Datetime
            </Segment>
          </Grid.Column>
        </Grid>
    );
  }
}

export default WidgetSessionsByDevices;