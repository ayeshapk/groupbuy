
import React from "react";
import Layout from "../src/component/Layout";

import DashboardSell from "../src/containers/DashboardSell";

import MenuBar from "../src/containers/MenuBar";
import SearchBar from "../src/containers/SearchBar";


const DashboardSellPage = () => {
    return (
        <Layout>
              <MenuBar/>
            <SearchBar/>
            <DashboardSell />
        </Layout>
    );
}
export default DashboardSellPage;