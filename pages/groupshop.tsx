
import React from "react";
import Layout from "../src/component/Layout";
import GroupShop from "../src/containers/GroupShop";
import MenuBar from "../src/containers/MenuBar";
import SearchBar from "../src/containers/SearchBar";

const GroupShopPage = () => {
    return (
        <Layout>
            <MenuBar/>
            <SearchBar/>
            <GroupShop/>
        </Layout>
    );
}
export default GroupShopPage;