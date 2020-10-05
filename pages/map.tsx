
import React from "react";
import Layout from "../src/component/Layout";
import MyGoogleMap from "../src/containers/Map";

import MenuBar from "../src/containers/MenuBar";
import SearchBar from "../src/containers/SearchBar";


const MapPage = () => {
    return (
        <Layout>
              <MenuBar/>
            <SearchBar/>
            <MyGoogleMap />
        </Layout>
    );
}
export default MapPage;