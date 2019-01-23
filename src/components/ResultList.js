import React, { Component } from "react";
import { List } from "semantic-ui-react";
import axios from "axios";

const API = "https://swapi.co/api/people/";

class ResultList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      error: null
    };
  }
  componentDidMount() {
    //this.setState({ isLoading: true });

    axios
      .get(API)
      .then(result =>
        this.setState({
          hits: result.data.results,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }

  render() {
    const { hits } = this.state;
    return (
      <List celled selection>
        {hits.map(person => (
          <List.Item key={person.url}>
            <List.Content>{person.name}</List.Content>
          </List.Item>
        ))}
      </List>
    );
  }
}

export default ResultList;
