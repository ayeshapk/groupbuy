
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
            <CartList/>
        </Layout>
    );
}
export default CartPage;