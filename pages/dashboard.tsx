
import React from "react";
import Layout from "../src/component/Layout";
import Dashboard from "../src/containers/Dashboard";

import MenuBar from "../src/containers/MenuBar";
import SearchBar from "../src/containers/SearchBar";


const DashboardPage = () => {
    return (
        <Layout>
              <MenuBar/>
            <SearchBar/>
            <Dashboard />
        </Layout>
    );
}
export default DashboardPage;