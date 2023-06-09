import React from "react";
import Layout from "./Layout/Layout";
import User from "./User";
import Room from "./Room";
import ModeButton from "./ModeButton";

const Home = () => {
    return (
        <>
            <Layout />
            <Room />
            <User />
            <ModeButton />
        </>
    )
};

export default Home;