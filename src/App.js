import { Component } from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  filterProducts = (event) => {
    if (event.target.value === "ALL") {
      this.setState({
        products: data.products,
        size: event.target.value,
      });
    } else {
      this.setState({
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
        size: event.target.value,
      });
    }
  };
  sortProducts = (event) => {
    const sort = event.target.value;
    this.setState({
      sort: sort,
      products: this.state.products.sort((a, b) =>
        sort === "lowest"
          ? a.price - b.price
          : sort === "highest"
          ? b.price - a.price
          : a._id - b._id
      ),
    });
  };
  render() {
    return (
      <div className="d-flex align-items-start flex-column vh-100">
        <header className=" ">
          <h1>header</h1>
        </header>

        <main className=" mb-auto w-100 ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-10">
                <div className="w-100">
                  <Filter
                    count={this.state.products.length}
                    size={this.state.size}
                    sort={this.state.sort}
                    filterProducts={this.filterProducts}
                    sortProducts={this.sortProducts}
                  />
                </div>
                <Products products={this.state.products}></Products>{" "}
              </div>
              <div className="col-2">
                <h1>right</h1>{" "}
              </div>
            </div>
          </div>
        </main>

        <footer className="">
          <h1>footer</h1>
        </footer>
      </div>
    );
  }
}

export default App;
