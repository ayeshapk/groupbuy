
import React from "react";
import Layout from "../src/component/Layout";
import DashboardBuy from "../src/containers/DashboardBuy";

import MenuBar from "../src/containers/MenuBar";
import SearchBar from "../src/containers/SearchBar";


const DashboardBuyPage = () => {
    return (
        <Layout>
              <MenuBar/>
            <SearchBar/>
            <DashboardBuy />
        </Layout>
    );
}
export default DashboardBuyPage;