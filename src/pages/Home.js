import React from "react";
import { pets } from "../components/pets";
import Cards from "../components/Cards";

const Home = () => {
    console.log(pets);
    return (
        <>
            <p>
                fjdkhfjdjhfdjhfdsajhjgfgdfggerLorem ipsum dolor sit amet
                consectetur adipisicing elit. Harum eveniet, maxime illum
                possimus dolores sed odio quod quas voluptatem sunt iusto dicta,
                est incidunt molestias! Voluptatem, debitis! Vero, odit hic!
            </p>
            <Cards data={pets} />
        </>
    );
};

export default Home;
