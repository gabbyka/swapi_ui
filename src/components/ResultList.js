import React, { Component } from "react";
import { List, Placeholder, Container } from "semantic-ui-react";

class ResultList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { hits, isLoading } = this.props;

    if (isLoading) {
      return (
        <Placeholder>
          <Placeholder.Line length="full" />
          <Placeholder.Line length="full" />
          <Placeholder.Line length="full" />
          <Placeholder.Line length="full" />
          <Placeholder.Line length="full" />
        </Placeholder>
      );
    }

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
