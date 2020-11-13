
import React from "react";
import Layout from "../src/component/Layout";
import CreaterShopContainer from "../src/containers/CreaterShopContainer";

import MenuBar from "../src/containers/MenuBar";
import SearchBar from "../src/containers/SearchBar";


const CreaterPage = () => {
    return (
        <Layout>
              <MenuBar/>
            
            <CreaterShopContainer />
        </Layout>
    );
}
export default CreaterPage;