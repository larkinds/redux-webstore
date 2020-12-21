import React, { Component } from 'react';
import OrgProducts from './OrgProducts';

export default class ProductsSection extends Component {
  render() {
    return (
      <div style={{ borderStyle: 'solid' }}>
        <h3>Products Section</h3>
        <OrgProducts />
      </div>
    );
  }
}
