
import React from "react";
import Layout from "../src/component/Layout";
import CardPayment from "../src/containers/CardPayment";
import MenuBar from "../src/containers/MenuBar";
import SearchBar from "../src/containers/SearchBar";


const PaymentPage = () => {
    return (
        <Layout>
            <MenuBar />
            <SearchBar />
            <CardPayment />
        </Layout>
    );
}
export default PaymentPage;