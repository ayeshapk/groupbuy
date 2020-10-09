
import React from "react";
import Layout from "../src/component/Layout";
import GroupList from "../src/containers/GroupList";
import MenuBar from "../src/containers/MenuBar";
import SearchBar from "../src/containers/SearchBar";

const HomePage = () => {
    return (
        <Layout>
            <MenuBar/>
            <SearchBar/>
            <GroupList/>
        </Layout>
    );
}
export default HomePage;