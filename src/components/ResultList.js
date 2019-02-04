import React, { Component } from "react";
import { List } from "semantic-ui-react";

class ResultList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { hits } = this.props;
    return (
      <List celled selection>
        {hits.map(item => (
          <List.Item key={item.url}>
            <List.Content>{item.name}</List.Content>
          </List.Item>
        ))}
      </List>
    );
  }
}

export default ResultList;
