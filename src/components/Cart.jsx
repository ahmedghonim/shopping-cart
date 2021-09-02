import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div className="conatiner ">
        {cartItems.length === 0 ? (
          <div className=" shadow  my-4 fs-3 text-center">cat is empty </div>
        ) : (
          <>
            <div className=" shadow  my-4 py-1 fs-5 text-center">
              you have {cartItems.length} in the cart{" "}
            </div>
            {cartItems.map((item) => {
              const { image, _id, title, price, count } = item;
              return (
                <div key={_id} className="row align-items-center">
                  <div className="col-4 ">
                    <img src={image} alt={title} className="img-fluid" />
                  </div>
                  <div className="col m-0 p-0">
                    <span className="d-block">{title}</span>
                    <span>${price + " x " + count}</span>
                    <button
                      onClick={() => this.props.removFromCart(item)}
                      className="ms-1 btn-sm btn-warning"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="text-center mt-3">
              <span>
                Totl: $
                {cartItems
                  .reduce((a, c) => a + c.price * c.count, 0)
                  .toFixed(1)}
              </span>
              <button className="btn btn-warning">Remove items</button>
            </div>
          </>
        )}
      </div>
    );
  }
}
