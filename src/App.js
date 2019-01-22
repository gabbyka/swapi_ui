import React, { Component } from "react";
import "./App.css";
import TopMenu from "./components/TopMenu";
import AppContent from "./components/AppContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: "People"
    };
  }

  handleMenuItemChange = (e, { name }) => {
    this.setState({ activeMenuItem: name });
  };

  render() {
    return (
      <React.Fragment>
        <TopMenu
          activeMenuItem={this.state.activeMenuItem}
          onMenuItemChange={this.handleMenuItemChange}
        />

        <AppContent />
      </React.Fragment>
    );
  }
}

export default App;
