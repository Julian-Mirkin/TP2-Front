import Category from "./Category";
import Logo from "./Logo";

export default function NavBar(props) {

    const options = [{text:'hola', link:'/'}, {text:'chau', lonk:'/bege'}]
    return(
        <div className="navBar">
            <Logo/>
            <Category name='bege' options={options}/>
        </div>
    )
}