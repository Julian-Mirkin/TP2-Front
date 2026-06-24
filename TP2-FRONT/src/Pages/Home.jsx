import NavBar from "../Components/NavBar";
import StoreLayout from "../Components/StoreLayout";
import { useEffect, useState } from "react";
import { getProducts } from "../Scripts/api";
import { useParams } from "react-router";

export default function HomePage(props) {
    const [elements, setElements] = useState([]);
    const [isLoading, setIsLoading] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    const params = useParams()
    useEffect(() => {
        let isMounted = true;
        

        async function loadProducts() {
            setIsLoading(true)
            const { data, error } = await getProducts(props.category, params.type);

            if (!isMounted) {
                return;
            }

            if (error) {
                setErrorMessage(error.message);
                setElements([]);
            } else {
                setElements(data || []);
                setErrorMessage("");
            }

            setIsLoading(false);
        }

        loadProducts();

        return () => {
            isMounted = false;
        };
    }, [props.category, params.type]);  
    console.log(elements)
    return(
        <>
        <NavBar/>
        <div className="pageContent">
            <h1>Bienvenido a Viena</h1>
            {isLoading && <p>Cargando productos...</p>}
            {!isLoading && errorMessage && (
                <p>No se pudo cargar desde Supabase: {errorMessage}</p>
            )}
            {elements.length>0? <StoreLayout elements={elements}/> : <h2>Ningun elemento encontrado...</h2>}
        </div>
        </>
    )
}