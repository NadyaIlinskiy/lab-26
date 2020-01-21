import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ title, children }) => (
  <div className="d-flex flex-wrap flex-row ">
  
    <div>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
