import { FaDivide } from "react-icons/fa";
import "../styles.scss";

import Card from "../Card";

function Cards(props) {
    const pets = props.data;
    return (
        <div className="cardsContainer">
            {pets.map((pet, key) => {
                return <Card key={key} pet={pet} />
            })}
            
        </div>
    );
}

export default Cards;
