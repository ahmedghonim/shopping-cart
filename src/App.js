import { Component } from "react";
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
  render() {
    return (
      <div className="d-flex align-items-start flex-column vh-100">
        <header className=" ">
          <h1>header</h1>
        </header>

        <main className=" mb-auto w-100 ">
         <div className="container-fluid">
           <div className="row">
           <div className="col-10"> <Products products={this.state.products}></Products> </div>  
           <div className="col-2"> <h1>right</h1> </div>  
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
