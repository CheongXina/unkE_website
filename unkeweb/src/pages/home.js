import { useNavigate } from "react-router-dom"

export default function Home() {
    const hStyle = { 
        color: '#CC0000',
        textShadow: '2px 2px 2px black'
    };

    const navigate = useNavigate()
    const unkeclick = () => {
        navigate('/unke'); // The leading '/' makes it an absolute path
    };
    
    return (
        <>
        <h2 style = {hStyle}>Welcome To CutDevGruppe</h2>
        <h3 className="cleanFont"> We are a computer software group from Alberta.</h3>
        <div className="cleanFont">
            Our primary focus is making interactable art and entertainment in the form of 3D Computer Games.
            <br/>Please visit the links below!
        </div>
        <div className="linkContainer">
            <div><button onClick = {unkeclick}> Unknown Era</button></div>
        </div>
        </>
    )
     
}