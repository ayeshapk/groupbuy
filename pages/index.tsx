
import React from "react";
import Layout from "../src/component/Layout";
import GroupList from "../src/containers/GroupList";
import GroupShop from "../src/containers/GroupShop";
import OrdersDetail from "../src/containers/OrdersDetail";

const HomePage = () => {
    return (
        <Layout>
            Test 5555555
            <GroupList/>
            <GroupShop />
            <OrdersDetail/>
        </Layout>
    );
}
export default HomePage;