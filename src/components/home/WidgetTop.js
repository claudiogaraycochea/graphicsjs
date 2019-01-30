import React, { Component } from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';

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
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default WidgetTop;