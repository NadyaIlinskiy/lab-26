import React from 'react'
import FilterLink from '../containers/FilterLink'
import ProductList from '../components/ProductsList'

const Footer = () => (
    <p>
        <FilterLink filter="ProductsList">All</FilterLink>
        {', '}
        <FilterLink >Active</FilterLink>
        {', '}
        <FilterLink >Completed</FilterLink>
    </p>
)
export default Footer