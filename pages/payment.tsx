
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
            <p>5) the payment page to choose which payment method</p>
            <CardPayment />
        </Layout>
    );
}
export default PaymentPage;