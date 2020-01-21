import React from 'react'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import { BrowserRouter, Route, Link } from "react-router-dom";

import "../styles/styles.scss";

const App = () => (
  <div >
  <BrowserRouter>

<Link to="/">[    PRODUCTS    ]</Link>
<Link to="/cart">[    CART    ]</Link>
 
<Route exact path="/" component={Products} />
<Route exact path="/cart" component={Cart} />
  
    </BrowserRouter>
  </div>
)

export default App
