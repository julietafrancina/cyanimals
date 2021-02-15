function Card(props) {
    return (
        <div className="cardContainer">
            <div className="imgContainer"><img src={props.pet.img}/></div>
            <h1 className="petName">{props.pet.name}</h1>
            <h2>{props.pet.age}</h2>
            <p>{props.pet.description}</p>
        </div>
        );
}

export default Card;
