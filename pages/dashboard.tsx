
import React from "react";
import Layout from "../src/component/Layout";
import DashboardContainer from "../src/containers/DashboardContainer";

import MenuBar from "../src/containers/MenuBar";
import SearchBar from "../src/containers/SearchBar";


const DashboardPage = () => {
    return (
        <Layout>
              <MenuBar/>
            <SearchBar/>
            <DashboardContainer />
        </Layout>
    );
}
export default DashboardPage;