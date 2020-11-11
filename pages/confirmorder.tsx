
import React from "react";
import Layout from "../src/component/Layout";
import ConfirmOrderContainer from "../src/containers/ConfirmOrderContainer";
import MenuBar from "../src/containers/MenuBar";
import SearchBar from "../src/containers/SearchBar";


const ConfirmOrderPage = () => {
    return (
        <Layout>
              <MenuBar/>
            <ConfirmOrderContainer/>
        </Layout>
    );
}
export default ConfirmOrderPage;