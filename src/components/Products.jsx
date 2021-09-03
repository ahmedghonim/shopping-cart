import React, { Component } from "react";
import ReactModal from "react-modal";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
  openModal = (product) => {
    this.setState({ product });
  };
  closeModal = () => {
    this.setState({ product: null });
  };
  render() {
    const { product } = this.state;
    return (
      <div>
        <Fade bottom cascade>
          <div className="row">
            {this.props.products.map((product) => {
              const { title, image, _id, price } = product;

              return (
                <div key={_id} className="col-3 mb-4 ">
                  <div className="card">
                    <a
                      className="text-decoration-none text-black "
                      onClick={() => this.openModal(product)}
                      href={"#" + _id}
                    >
                      <img src={image} alt={title} className="img-fluid" />
                    </a>
                    <div className="card-body">
                      <a
                        className="text-decoration-none text-black "
                        onClick={() => this.openModal(product)}
                        href={"#" + _id}
                      >
                        <h4 className="card-title">{title}</h4>
                      </a>
                      <div className="card-ffoter d-flex justify-content-between">
                        <h5>${price.toFixed(1)}</h5>
                        <button
                          onClick={() => this.props.addProduct(product)}
                          className="btn btn-success "
                        >
                          Add to caret
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Fade>
        {product && (
          <ReactModal isOpen={true}>
            <Zoom>
              <div className="w-100 text-end ">
                <button
                  className="btn-close "
                  onClick={() => {
                    this.closeModal();
                  }}
                ></button>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <img
                      src={product.image}
                      className="img-fluid"
                      alt={product.title}
                    />
                  </div>
                  <div className="col-8 mt-3">
                    <h2 className="fw-bold">{product.title}</h2>
                    <p className="mt-4">{product.description}</p>
                    <div className="mt-5">
                      <span className="fw-bold">Size: </span>
                      {product.availableSizes.map((s) => (
                        <span className="badge bg-info text-dark fs-6 m-1">
                          {s}
                        </span>
                      ))}
                      <div className="mt-5">
                        <span className="fw-bold ms-5 ">$ {product.price}</span>
                        <button
                          onClick={() => {
                            this.props.addProduct(product);
                            this.closeModal();
                          }}
                          className="btn btn-success ms-5"
                        >
                          Add to caret
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </ReactModal>
        )}
      </div>
    );
  }
}
