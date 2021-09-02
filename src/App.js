import { Component } from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import Cart from "./components/Cart";
import data from "./data.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
      size: "",
      sort: "",
    };
  }
  creatOrder=(order)=>{
 alert("thnks go to heal :* " + order.name)
  }
  removFromCart = (item) => {
    const cart = this.state.cartItems;
    const cartItems = cart.filter((newItem) => newItem._id !== item._id);
    this.setState({ cartItems });
    localStorage.setItem("cartItems",JSON.stringify(cartItems))

  };
  addProduct = (product) => {
    const cartItems = this.state.cartItems;
    let allredyAdd = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        allredyAdd = true;
      }
    });
    if (!allredyAdd) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
  };
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
                <Products
                  products={this.state.products}
                  addProduct={this.addProduct}
                />
              </div>
              <div className="col-2">
                <Cart
                  cartItems={this.state.cartItems}
                  removFromCart={this.removFromCart}
                  creatOrder={this.creatOrder}
                  
                />
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
