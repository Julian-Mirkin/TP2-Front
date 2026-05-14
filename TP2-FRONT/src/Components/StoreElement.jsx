import { Link } from "react-router";

export default function StoreElement(props) {

    return(
        <Link to={props.link} className="storeElement">
            <div className="elementContainer">
            <img src={props.img} alt={props.name}/>
            </div>
            <div className="storeElementTxt">
            <hr/>
            <h2>{props.name}</h2>
            <p>${props.price}</p>
            </div>
        </Link>
    )
}