import { useEffect, useState } from "react";
import { getProduct } from "../Scripts/api";
import { useParams } from "react-router";

export default function ProductPage(props) {
    const {productId} = useParams()
    const [productData, setProductData] = useState(null)

    useEffect(()=>{

        async function loadProduct() {
            const {result,error} = await getProduct(productId)

            if(error) console.log(error)
            
                else setProductData(result)

        }
        loadProduct()

    },[])

    return(<p>{productData}</p>)
}
