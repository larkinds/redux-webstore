import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <div style={{ borderStyle: 'dotted' }}>
        <h3>ProtestStore</h3>
        <h3>About</h3>
        <select name="store" id="store">
          <option value="store" href="">
            Store
          </option>
          <option value="ACLU" href="">
            ACLU
          </option>
          <option value="NAACP" href="">
            NAACP
          </option>
          <option value="plannedParenthood" href="">
            Planned Parenthood
          </option>
        </select>
        <h3>Cart</h3>
      </div>
    );
  }
}
