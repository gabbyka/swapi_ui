import React, { Component } from "react";
import "./App.css";
import TopMenu from "./components/TopMenu";
import AppContent from "./components/AppContent";
import axios from "axios";

const API = "https://swapi.co/api/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: "People",
      hits: [],
      isLoading: false,
      error: null
    };
  }

  handleMenuItemChange = (e, { name }) => {
    this.setState({ activeMenuItem: name });
    this.fetchDataFromSWAPI(name);
  };

  componentDidMount() {
    this.fetchDataFromSWAPI(this.state.activeMenuItem);
  }

  fetchDataFromSWAPI(activeMenuItem) {
    let properAPI = API + activeMenuItem.toLowerCase() + "/";
    axios
      .get(properAPI)
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
    return (
      <React.Fragment>
        <TopMenu
          activeMenuItem={this.state.activeMenuItem}
          onMenuItemChange={this.handleMenuItemChange}
        />

        <AppContent hits={this.state.hits} />
      </React.Fragment>
    );
  }
}

export default App;
