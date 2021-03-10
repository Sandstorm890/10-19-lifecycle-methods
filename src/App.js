import React from 'react';
import Header from './Header'
import ItemsContainer from './ItemsContainer'
import CartContainer from './CartContainer'
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component{

  state = {
    page: "items",
    term: ""
  }

  changePage = (e) => {

    const page = e.target.id.split("-")[0]
    this.setState({
      page: page
    })
  }

  // addToCart = (id) => {
  //   // find the Item with that id 
  //   const foundItem = this.props.items.find(item => item.id === id)
  //   // update state to show that the item is in the cart
  //   this.props.dispatch({payload: foundItem, type: "ADD_ITEM"})
  // }

  // LCM can ONLY be used in a class component 
  componentDidMount(){
    // typcially fetch requests happen in a componentDidMount
    console.log(this.props)

    fetch("http://localhost:3000/items")
    .then(res => res.json())
    .then(json => {
      // this.setState({items: json})
      this.props.dispatch({payload: json, type: "GOT_ITEMS"})

    })
  }



  render(){
    return (
      <div className="App">
        <Header changePage={this.changePage} />
        {this.state.page === "items" ? <ItemsContainer items={this.props.items} cart={this.props.cart}/> : <CartContainer />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {items: state.items, cart: state.cart}
}

export default connect(mapStateToProps)(App)
// export default App;