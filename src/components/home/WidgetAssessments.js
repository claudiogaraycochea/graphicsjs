import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import { Grid, Segment } from 'semantic-ui-react';
import WidgetHeader from './WidgetHeader';


const data = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      label: "My First dataset",
      data: [
        50,
        10,
        50,
        82
      ],
    }, {
      label: 'hidden dataset',
      data: [
        10,
        40,
        30,
        80
      ]
    }, {
      label: "My Second dataset",
      data: [
        90,
        40,
        50,
        100
      ]
    }
  ]
};

class WidgetAssessments extends Component {
  render() {
    const titleHeader = 'Assessments';
    return (
        <Grid stackable stretched columns={1}>
            <Grid.Column>
                <Segment>
                    <WidgetHeader titleHeader={titleHeader} {...this.props}/>
                    <Line data={data} />
                </Segment>
            </Grid.Column>
        </Grid>
    );
  }
};

export default WidgetAssessments;