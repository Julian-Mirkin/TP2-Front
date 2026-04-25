import { Link } from "react-router";
export default function Logo(props) {

    return(
            <Link className="logo" to={props.link}>
                <img src='/mini_logo.svg' className="logo"/>
            </Link>
    )
}