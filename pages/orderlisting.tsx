
import React from "react";
import Layout from "../src/component/Layout";
import OrderListingContainer from "../src/containers/OrderListingContainer";

import MenuBar from "../src/containers/MenuBar";
import SearchBar from "../src/containers/SearchBar";


const OrderListingPage = () => {
    return (
        <Layout>
              <MenuBar/>
            <SearchBar/>
            <OrderListingContainer />
        </Layout>
    );
}
export default OrderListingPage;