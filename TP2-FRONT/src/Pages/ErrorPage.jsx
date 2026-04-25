import Button from "../Components/Button";
import './page.css'

export default function ErrorPage() {
    return(
        <div className="errorPage">
            <h1>404</h1>
            <p>La página que buscas no existe</p>
            <Button text='Volver al inicio' link='/'/>
        </div>
    )
}