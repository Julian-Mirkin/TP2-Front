import Category from "./Category";
import Logo from "./Logo";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router";

export default function NavBar(props) {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        const { error } = await signOut();

        if (!error) {
            navigate('/login');
        }
    }

    const hombresOptions = [{text:'Remeras', link:'/hombre/remeras'}, {text:'Pantalones', link:'/hombre/pantalones'}]
    const mujeresOptions = [{text:'Remeras', link:'/mujer/remeras'}, {text:'Pantalones', link:'/mujer/pantalones'}]
    const ninosOptions = [{text:'Remeras', link:'/ninos/remeras'}, {text:'Pantalones', link:'/ninos/pantalones'}]
    const accesoriosOptions = [{text:'gorras', link:'/accesorios/gorras'}, {text:'joyeria', link:'/accesorios/joyeria'}]
    return(
        <div className="navBar">
            <Logo link="/"/>
            <Category name='Hombre' options={hombresOptions}/>
            <Category name='Mujer' options={mujeresOptions}/>
            <Category name='Niños' options={ninosOptions}/>
            <Category name='Accesorios' options={accesoriosOptions}/>
            <div className="navAuth">
                <span>{user?.email}</span>
                <button className="defaultButton" onClick={handleLogout}>Salir</button>
            </div>
        </div>
    )
}