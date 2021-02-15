import { FaDivide } from "react-icons/fa";

import Card from "../Card";

function Cards(props) {
    const pets = props.data;
    return (
        <div>
            {pets.map((pet, key) => {
                return <Card key={key} pet={pet} />
            })}
            
        </div>
    );
}

export default Cards;
