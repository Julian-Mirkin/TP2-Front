import './components.css'
import { Link } from 'react-router'

export default function Button(props)  {

    return(
        <Link>
        <button className='defaultButton' onClick={props.onClick} 
        disabled={props.disabled}>{props.text}</button> </Link>

    )
}