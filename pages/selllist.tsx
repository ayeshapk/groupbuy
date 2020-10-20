
import React from "react";
import Layout from "../src/component/Layout";

import SellListContainer from "../src/containers/SellListContainer";

import MenuBar from "../src/containers/MenuBar";
import SearchBar from "../src/containers/SearchBar";


const DashboardSellPage = () => {
    return (
        <Layout>
              <MenuBar/>
            <SearchBar/>
            <SellListContainer />
        </Layout>
    );
}
export default DashboardSellPage;