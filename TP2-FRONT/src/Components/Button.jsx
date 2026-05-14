//PROPS: onClick (func), link (url/ruta), disabled (bool), text (string), className (nombre clase)


import './components.css'
import { Link } from 'react-router'

export default function Button(props)  {

    return(
        <Link to={props.link || null}>
        <button className={'defaultButton '+props.className} onClick={props.onClick} 
        disabled={props.disabled}>{props.text}</button> </Link>

    )
}