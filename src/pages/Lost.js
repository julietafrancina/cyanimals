import React from "react";
import { pets } from "../components/pets";
import Cards from "../components/Cards";
import ActionBtns from "../components/ActionBtns";

const Lost = () => {
    const lostPets = pets.filter(pets => pets.category == 'Perdido');
    return (
        <>
            <Cards data={lostPets} />
            <ActionBtns />
        </>
    );
};

export default Lost;
