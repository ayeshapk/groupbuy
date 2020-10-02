
import React from "react";
import Layout from "../src/component/Layout";

import MenuBar from "../src/containers/MenuBar";
import OrderProduct from "../src/containers/OrderProduct";
import SearchBar from "../src/containers/SearchBar";


const OrderPage = () => {
    return (
        <Layout>
              <MenuBar/>
            <SearchBar/>
            <p>3) inside one shop page where user can choose the drinks</p>
            <OrderProduct/>
        </Layout>
    );
}
export default OrderPage;