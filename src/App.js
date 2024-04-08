import React from 'react';
import data from './data.json';
import Products from './components/Products';

class App extends React.Component {
constructor(){
  super();
  this.state = {
    products: data.products,
    size: "",
    sort: "",
  }
}
  render(){
  return (
   <div className="grid-container">
      <header>
        <a href="/">Choice-Fit</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products products={this.state.products}></Products>
          </div>
          <div className="sidebar">Cart Items</div>  
        </div>
      </main>
      <footer>
      Copyright &#169; 2022 Samuel Olamilehin. All right received.
      </footer>
   </div>
  );
 }
}

export default App;
