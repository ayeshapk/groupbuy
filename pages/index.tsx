
import React from "react";
import Layout from "../src/component/Layout";
import GroupList from "../src/containers/GroupList";
import GroupShop from "../src/containers/GroupShop";
import MenuBar from "../src/containers/MenuBar";
import OrdersDetail from "../src/containers/OrdersDetail";

import SearchBar from "../src/containers/SearchBar";

const HomePage = () => {
    return (
        <Layout>
            <MenuBar/>
            <SearchBar/>
            <p>1) the page with a list of groups.</p>
            <GroupList/>
        </Layout>
    );
}
export default HomePage;