import React from "react";
import { pets } from "../components/pets";
import Cards from "../components/Cards";
import ActionBtns from "../components/ActionBtns";

const Stray = () => {
    const strayPets = pets.filter(pets => pets.category == 'Callejero');
    return (
        <>
            <Cards data={strayPets} />
            <ActionBtns />
        </>
    );
};

export default Stray;
