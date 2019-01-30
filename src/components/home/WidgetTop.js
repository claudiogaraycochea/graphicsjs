import React, { Component } from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';
import SimpleChart from '../graphs/simpleChart/SimpleChart';

class WidgetTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //timespan: this.props.widget.timespan
    };
  }

  render() {
    return (
      <Grid stackable stretched columns={4}>
        <Grid.Column>
          <Segment>
            <SimpleChart />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <SimpleChart />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <SimpleChart />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <SimpleChart />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default WidgetTop;