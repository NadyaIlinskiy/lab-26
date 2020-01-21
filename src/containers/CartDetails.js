import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getTotal, getTotalNumber } from '../reducers'
import CartD from '../components/Cart'

const CartContainer = ({ products, total, checkout }) => (
  <CartD
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)} />
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: '',

  })).isRequired,
  total: ''
}

const mapStateToProps = (state) => ({
  products: getTotalNumber(state),
 
})

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)
