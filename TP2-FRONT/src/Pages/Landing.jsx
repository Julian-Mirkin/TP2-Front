import { useEffect } from "react";
import Button from "../Components/Button";
import Navbar from "../Components/NavbarLanding";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router";

export default function LandingPage() {
    const nav = useNavigate()
    const {user} = useAuth()

    useEffect(()=>{
        if(user) nav('/home')

    },[])

return(
    <>
        <Navbar/>
     <h1>hello world</h1>
        <Button  link='/login'text='Log in'/>
    </>

)

}