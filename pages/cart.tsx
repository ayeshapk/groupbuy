
import React from "react";
import Layout from "../src/component/Layout";
import CartList from "../src/containers/CartList";
import MenuBar from "../src/containers/MenuBar";
import SearchBar from "../src/containers/SearchBar";


const CartPage = () => {
    return (
        <Layout>
     
              <MenuBar/>
            <SearchBar/>
            <p>4) a confirmation page with the selected drinks</p>
            <CartList/>
        </Layout>
    );
}
export default CartPage;