import React from "react";
import { pets } from "../components/pets";
import Cards from "../components/Cards";
import ActionBtns from "../components/ActionBtns";

const Adoption = () => {
    const adoptionPets = pets.filter(pets => pets.category == 'Adopción');
    return (
        <>
            <Cards data={adoptionPets} />
            <ActionBtns />
        </>
    );
};

export default Adoption;
