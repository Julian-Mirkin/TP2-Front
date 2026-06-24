import Category from "./Category";
import Logo from "./Logo";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router";

export default function NavBar() {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        const { error } = await signOut();

        if (!error) {
            navigate('/login');
        }
    }

    const hombresOptions = [{text:'Remeras', link:'/hombre/remera'}, {text:'Pantalones', link:'/hombre/pantalon'}]
    const mujeresOptions = [{text:'Remeras', link:'/mujer/remera'}, {text:'Pantalones', link:'/mujer/pantalon'}]
    const ninosOptions = [{text:'Remeras', link:'/ninios/remera'}, {text:'Pantalones', link:'/ninios/pantalon'}]
    const accesoriosOptions = [{text:'gorras', link:'/accesorios/gorra'}, {text:'joyeria', link:'/accesorios/joyeria'}]
    return(
        <div className="navBar">
            <Logo link="/"/>
            <Category name='Home'/>
            <Category name='Hombre' options={hombresOptions}/>
            <Category name='Mujer' options={mujeresOptions}/>
            <Category name='Niños' link='ninios' options={ninosOptions}/>
            <Category name='Accesorios' options={accesoriosOptions}/>
            <div className="navAuth">
                <span onClick={() => navigate('/cart')}>{user?.email}</span>
                <button className="defaultButton" onClick={handleLogout}>Salir</button>
            </div>
        </div>
    )
}