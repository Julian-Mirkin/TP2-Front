import { Link } from "react-router";
import { useState } from "react";
export default function Category(props) {
    const [selected, setSelected] = useState(false)
   const options = props.options.map((o)=> <Link className="option" key={o.link} to={o.link}>
            {o.text}
        </Link>)

    return(
        <div className="category" onMouseEnter={()=>setSelected(true)} onMouseLeave={()=>setSelected(false)}>
            <p>{props.name}</p>
            {selected && <div className="optionBox">
                {options}
            </div>}
        </div>
    )
}