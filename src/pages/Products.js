import React from "react";
import ProductList from '../containers/ProductsContainer'
import Cart from '../containers/CartContainer'

const Products = (props)=> {
    return (
        <div >
            <h3>Cool Redux Books</h3>
            <ProductList />
        </div>
    )
}

export default Products;