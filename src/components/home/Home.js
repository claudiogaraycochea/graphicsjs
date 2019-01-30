import React, { Component } from 'react';
import CircularChart from '../graphs/circularChart/CircularChart';
import { Grid, Image, Segment } from 'semantic-ui-react';
import WidgetAssessments from './WidgetAssessments';
import WidgetTop from './WidgetTop';
import WidgetSessionsByDevices from './WidgetSessionsByDevices';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="main">
        <WidgetTop />
        <WidgetAssessments />
        <Grid stackable stretched columns={2}>
          <Grid.Column>
            <Grid stackable stretched columns={2}>
              <Grid.Column>
                <Segment>
                  <CircularChart percentage={70} />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <CircularChart percentage={25} />
                </Segment>
              </Grid.Column>
            </Grid>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
          </Grid.Column>
        </Grid>
        <WidgetSessionsByDevices />
      </div>
    );
  }
}

export default Home;