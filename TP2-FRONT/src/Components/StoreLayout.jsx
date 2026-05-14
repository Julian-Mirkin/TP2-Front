import StoreElement from "./StoreElement"

export default function StoreLayout(props) {

const elements = props.elements?.map((e)=> <StoreElement key={e.id} name={e.nombre} price={e.precio} img={e.foto} link={'/product/'+e.nombre}/>)

    return(
        <div className="storeLayout">
            {elements}
        </div>
    )
}