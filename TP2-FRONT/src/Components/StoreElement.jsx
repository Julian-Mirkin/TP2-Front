import { Link } from "react-router";

export default function StoreElement(props) {

    return(
        <Link to={props.link} className="storeElement">
            <img src={props.img} alt={props.name}/>
            <hr/>
            <h2>{props.name}</h2>
            <p>${props.price}</p>
        </Link>
    )
}