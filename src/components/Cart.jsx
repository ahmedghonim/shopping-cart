import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export default class Cart extends Component {
  state = {
    name: "",
    email: "",
    address: "",
    showCheckout: false,
  };
  handelInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createOrder = (e) => {
    e.preventDefault();

    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      catItems: this.props.cartItems,
    };
    this.props.creatOrder(order);
  };
  render() {
    const { cartItems } = this.props;

    return (
      <div className="conatiner ">
        {cartItems.length === 0 ? (
          <div className=" shadow  my-4  text-center p-1 ">
            {" "}
            <span className="fs-5 fw-bold ">cat is empty</span>{" "}
          </div>
        ) : (
          <>
            <div className=" shadow  my-4 py-1 fs-5 text-center">
              you have {cartItems.length} in the cart{" "}
            </div>
            <Fade left cascade>
              <div>
                {cartItems.map((item) => {
                  const { image, _id, title, price, count } = item;
                  return (
                    <div
                      key={_id}
                      className="row align-items-center shadow-sm py-2 "
                    >
                      <div className="col-4 ">
                        <img src={image} alt={title} className="img-fluid" />
                      </div>
                      <div className="col m-0 p-0">
                        <span className="d-block lh-1">{title}</span>
                        <span>${price + " x " + count}</span>
                        <button
                          onClick={() => this.props.removFromCart(item)}
                          className="ms-1 btn btn-sm btn-warning"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Fade>
            <div className="text-center mt-3">
              <span>
                Totl: $
                {cartItems
                  .reduce((a, c) => a + c.price * c.count, 0)
                  .toFixed(1)}
              </span>
              <button
                onClick={() => {
                  this.setState({ showCheckout: true });
                }}
                className=" ms-2 btn btn-sm btn-warning"
              >
                Proced
              </button>
            </div>
            <Fade right cascade>
              <div>
                {this.state.showCheckout && (
                  <div className="shadow p-1 mt-2">
                    <form onSubmit={this.createOrder}>
                      <label className="form-label" htmlFor="email">
                        Email :
                      </label>
                      <input
                        required
                        className="form-control"
                        name="email"
                        type="email"
                        onChange={this.handelInput}
                      />
                      <label className="form-label" htmlFor="name">
                        Name :
                      </label>
                      <input
                        required
                        className="form-control"
                        name="name"
                        type="text"
                        onChange={this.handelInput}
                      />
                      <label className="form-label" htmlFor="adress">
                        Address :
                      </label>
                      <input
                        required
                        className="form-control"
                        name="adress"
                        type="text"
                        onChange={this.handelInput}
                      />
                      <button
                        className="btn btn-sm btn-success mt-2 w-100"
                        type="submit"
                      >
                        CheckOut
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </Fade>
          </>
        )}
      </div>
    );
  }
}
