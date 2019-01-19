import React from "react";
import { Menu } from "semantic-ui-react";

const menuItems = ["People", "Starships", "Planets", "Films", "Vehicles"];

const TopMenu = ({ activeMenuItem, onMenuItemChange }) => (
  <Menu inverted>
    <Menu.Item header>Star Wars API frontend</Menu.Item>

    {menuItems.map(name => (
      <Menu.Item
        key={name}
        name={name}
        active={activeMenuItem === name}
        onClick={onMenuItemChange}
      />
    ))}

    <Menu.Item header>Selected Item is: {activeMenuItem}</Menu.Item>
  </Menu>
);

export default TopMenu;
