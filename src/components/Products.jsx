import React, { Component } from "react";

export default class Products extends Component {
  render() {
    console.log(this.props.products);
    return (
      <div className="row">
        {this.props.products.map((product) => {
          const { title, image, _id, price } = product;

          return (
            <div key={_id} className="col-3 mb-4">
              <div className="card">
                <img src={image} alt={title} className="img-fluid" />
                <div className="card-body">
                  <h4 className="card-title">{title}</h4>
                  <div className="card-ffoter d-flex justify-content-between">
                    <h5>${price.toFixed(1)}</h5>
                    <button className="btn btn-success ">Add to caret</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
