
import React from "react";
import Layout from "../src/component/Layout";
import DashboardArchiveContainer from "../src/containers/DashboardArchiveContainer";

import MenuBar from "../src/containers/MenuBar";
import SearchBar from "../src/containers/SearchBar";


const DashboardArchivePage = () => {
    return (
        <Layout>
              <MenuBar/>
            <SearchBar/>
            <DashboardArchiveContainer />
        </Layout>
    );
}
export default DashboardArchivePage;