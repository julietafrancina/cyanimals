import "../styles.scss";

function Card(props) {
    return (
        <div className="cardContainer">
            <div className="imgContainer"
                style={{
                    backgroundImage: `url(${props.pet.img})`
                }}
            ></div>
            <div className="textContainer">
                <div className="titleContainer">
                    <h1 className="petName">{props.pet.name}</h1>
                    <h2 className="petAge">{props.pet.age}</h2>
                </div>
                <p className="petLocation">{props.pet.location}</p>
                <p className="petDescription">{props.pet.description}</p>
            </div>
        </div>
        );
}

export default Card;