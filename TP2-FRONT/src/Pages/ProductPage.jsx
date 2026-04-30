import { useEffect, useState } from "react";
import { getProduct } from "../Scripts/api";
import { useParams } from "react-router";
import NavBar from "../Components/NavBar";

export default function ProductPage(props) {
    const params = useParams()
    const [productData, setProductData] = useState(null)

    useEffect(()=>{

        async function loadProduct() {
            const {data, error} = await getProduct(params.productId)

            if(error) console.log(error)
            
                else setProductData(data[0])
                console.log(data)

        }
        loadProduct()

    },[])

    return(
    <>
        <NavBar/>
        <div className="productPageContent">
            {productData ? (
                <>
                    <img src={productData.foto} alt={productData.nombre} className="productImage"/>
                    <div className="productInfo">
                        <h1>{productData.nombre}</h1>
                        <p>{productData.descripcion}</p>
                        <p>Precio: ${productData.precio}</p>
                    </div>
                </>
            ) : (
                <p>Cargando producto...</p>
            )}
        </div>
    
    
    </>)
}
