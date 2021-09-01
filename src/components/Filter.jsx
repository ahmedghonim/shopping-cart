import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className=" shadow row justify-content-around align-items-center my-4">
        <div className="col-2">
          <span className="bold fs-3 "> {this.props.count} Product</span>
        </div>
        <div className="col-2">
          <select value={this.props.sort} onChange={this.props.sortProducts} className="form-select " aria-label="Default select example">
            <option   defaultValue="Latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="col-2">
          <select value={this.props.size} onChange={this.props.filterProducts} className="form-select col-2" aria-label="Default select example">
            <option  defaultValue="ALL">ALL</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    );
  }
}
