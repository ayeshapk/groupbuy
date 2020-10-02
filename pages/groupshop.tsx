
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
            <p>2) inside one group page where there is a list of shops</p>
            <GroupShop/>
        </Layout>
    );
}
export default GroupShopPage;