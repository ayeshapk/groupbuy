
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
            <OrderProduct/>
        </Layout>
    );
}
export default OrderPage;