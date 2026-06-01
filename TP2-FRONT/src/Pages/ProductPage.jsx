import { useEffect, useState } from "react";
import { getProduct, postOrder } from "../Scripts/api";
import { useParams } from "react-router";
import NavBar from "../Components/NavBar";
import Button from '../Components/Button.jsx'
import { useAuth } from "../Context/AuthContext.jsx";
import { useNavigate } from "react-router";

export default function ProductPage() {
    const params = useParams()
    const [productData, setProductData] = useState(null)
    const{ user} = useAuth()
    const nav = useNavigate()

    useEffect(()=>{

        async function loadProduct() {
            const {data, error} = await getProduct(params.productId)

            if(error) console.log(error)
            
                else setProductData(data[0])
                console.log(data)

        }
        loadProduct()

    },[])

    async function createOrder() {
        console.log('order started')

        let res = await postOrder(user.id, productData.id)
            console.log(res)
            if(res.error) {
                alert('Error al crear el pedido: ' + res.error.message)
            }
            else { nav('/cart') }

            
    }

    return(
    <>
        <NavBar/>
        <div className="productPageContent">
            {productData ? (
                <>
                    <img src={productData.foto} alt={productData.nombre} className="productImage"/>
                    <div className="productInfo">
                        <div>
                        <h1>{productData.nombre}</h1>
                        <p>{productData.descripcion}</p>
                        <p>Precio: ${productData.precio}</p>
                        </div>
                        <Button disabled={productData.cantidad<0} text={productData.cantidad>0? 'Comprar' : 'No disponible'} onClick={createOrder}/>
                    </div>
                </>
            ) : (
                <p>Cargando producto...</p>
            )}
        </div>
    
    
    </>)
}
