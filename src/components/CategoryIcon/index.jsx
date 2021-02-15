import { Redirect } from "react-router-dom";

function CategoryIcon(props) {
    let categoryIcon, color;
    if (props.category == "Callejero") {
        categoryIcon = <button className="categoryIcon">🌇</button>;
    } else if (props.category == "Adopción") {
        categoryIcon = <button className="categoryIcon">🏠</button>;
    } else if (props.category == "Tránsito") {
        categoryIcon = <button className="categoryIcon">🚚</button>;
    } else if (props.category == "Perdido") {
        categoryIcon = <button className="categoryIcon">🔍</button>;
    } 

    

    return (
        <div
            style={{
                backgroundColor: {color}
            }}
            >{categoryIcon}</div>
    )
}

export default CategoryIcon;