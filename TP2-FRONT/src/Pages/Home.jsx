import NavBar from "../Components/NavBar";
import StoreLayout from "../Components/StoreLayout";
import { useEffect, useState } from "react";
import { getProducts } from "../Scripts/api";

export default function HomePage(props) {
    const [elements, setElements] = useState([]);
    const [isLoading, setIsLoading] = useState();
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        let isMounted = true;
        

        async function loadProducts() {
            setIsLoading(true)
            const { data, error } = await getProducts(props.category);

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
    }, [props.category]);
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
            <StoreLayout elements={elements}/>
        </div>
        </>
    )
}