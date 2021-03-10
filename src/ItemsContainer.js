import React from 'react'
import Item from './Item'
import FilterBar from './FilterBar'

class ItemsContainer extends React.Component {

    state = {
      searchTerm: ""
    }

    componentDidMount(){
        console.log("Items Container mounted")
      }

    filterItems = (e) => {
      const searchTerm = e.target.value
      console.log(searchTerm)
      this.setState({searchTerm: searchTerm})
    }

    displayItems(){

      const itemsToDisplay = this.props.items.filter(i => i.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

      return itemsToDisplay.map(item => <Item item={item} key={item.id} cart={this.props.cart} name={item.name} price={item.price} id={item.id} image1={item.image1} image2={item.image2} />) 
    }

    render(){
        return(
            <div id="ItemsContainer">
              <FilterBar filterItems={this.filterItems} />
              { this.displayItems()}
            </div>
        )
    }
}

export default ItemsContainer