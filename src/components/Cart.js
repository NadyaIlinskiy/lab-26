import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onClearButtonClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div >
    
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button className="btn btn-dark" onClick={onClearButtonClicked} 
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onClearButtonClicked: PropTypes.func
}

export default Cart
