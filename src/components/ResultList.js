import React, { Component } from "react";
import { List } from "semantic-ui-react";

class ResultList extends Component {
  state = {};
  render() {
    return (
      <List celled selection>
        <List.Item>
          <List.Content>
            <List.Header>Snickerdoodle</List.Header>
            An excellent companion
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header>Poodle</List.Header>A poodle, it's pretty basic
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header>Paulo</List.Header>
            He's also a dog
          </List.Content>
        </List.Item>
      </List>
    );
  }
}

export default ResultList;
