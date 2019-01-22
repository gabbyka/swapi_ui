import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";

const style = {
  grid: {
    marginLeft: "5px",
    marginRight: "5px"
  }
};

class AppContent extends Component {
  render() {
    return (
      <Grid columns={2} stackable divided relaxed style={style.grid}>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>{" "}
      </Grid>
    );
  }
}

export default AppContent;