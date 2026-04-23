import { Link } from "react-router";
import { useState } from "react";
export default function Category(props) {
    const [selected, setSelected] = useState(false)
   const options = props.options.map((o)=>{<Link to={o.link}>{o.text}</Link>})

    return(
        <div onMouseEnter={()=>setSelected(true)} onMouseLeave={()=>setSelected(false)}>
            <p>{props.name}</p>
            {selected && <div>
                {options}
            </div>}
        </div>
    )
}