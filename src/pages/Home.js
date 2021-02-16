import React from "react";
import { pets } from "../components/pets";
import Cards from "../components/Cards";
import ActionBtns from "../components/ActionBtns";

const Home = () => {
    return (
        <>
            <Cards data={pets} />
            <ActionBtns />
        </>
    );
};

export default Home;
