import React from "react";
import { pets } from "../components/pets";
import Cards from "../components/Cards";

const Home = () => {
    console.log(pets);
    return (
        <>
            <Cards data={pets} />
        </>
    );
};

export default Home;
