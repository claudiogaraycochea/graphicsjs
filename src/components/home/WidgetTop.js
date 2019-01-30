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
        <SimpleChart 
          title={1700}
          description={`Unique Candidates`}
          datetime= {`Jan 3. 2019 - Mar 6. 2019 | 9:00 AM - 12:00 PM`}
          color={`blue`} 
        />
        <SimpleChart 
          title={1700}
          description={`Unique Candidates`}
          datetime= {`Jan 3. 2019 - Mar 6. 2019 | 9:00 AM - 12:00 PM`}
          color={`orange`} 
        />
        <SimpleChart 
          title={1700}
          description={`Unique Candidates`}
          datetime= {`Jan 3. 2019 - Mar 6. 2019 | 9:00 AM - 12:00 PM`}
          color={`highlight-blue`} 
        />
        <SimpleChart
          title={1700}
          description={`Unique Candidates`}
          datetime= {`Jan 3. 2019 - Mar 6. 2019 | 9:00 AM - 12:00 PM`}
          color={`green`} 
        />
      </Grid>
    );
  }
}

export default WidgetTop;