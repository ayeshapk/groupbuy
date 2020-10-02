
import React from "react";
import Layout from "../src/component/Layout";
import GroupList from "../src/containers/GroupList";
import GroupShop from "../src/containers/GroupShop";
import MenuBar from "../src/containers/MenuBar";
import OrdersDetail from "../src/containers/OrdersDetail";
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