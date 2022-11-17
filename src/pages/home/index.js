import Button from "../../components/Button";
import { useNavigate } from "react-router-dom"
import background from "../../assets/chocotorta-destacada.jpg";
import background2 from "../../assets/chocotorta.jpg";
import { useState } from "react";

function Home() {
    const navigate = useNavigate();

    const onClickButton = (url) => {
        navigate(url);
    }
    const [changeBackground, setChangebackground] = useState(background)
    return (
<section className="hero is-medium is-fullheight" style={{backgroundImage:`url(${changeBackground})`, backgroundSize:"cover"}}>;
<div className="hero-body">
    <div className="container has-text-centered">
        <Button onClick={()=>onClickButton("/game")} text="El juego empieza"/>
        <br/>
        <button onClick={()=>setChangebackground(background2)}>Cambiar Fondo</button>
        <br/>
    </div>
</div>
</section>
)
} 


export default Home;