
import React from "react";
import Layout from "../src/component/Layout";
import BuyListContainer from "../src/containers/BuyListContainer";

import MenuBar from "../src/containers/MenuBar";
import SearchBar from "../src/containers/SearchBar";


const DashboardBuyPage = () => {
    return (
        <Layout>
              <MenuBar/>
            <SearchBar/>
            <BuyListContainer />
        </Layout>
    );
}
export default DashboardBuyPage;